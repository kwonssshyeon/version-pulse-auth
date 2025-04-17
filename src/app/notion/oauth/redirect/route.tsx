import { NextRequest, NextResponse } from "next/server";

const NOTION_CLIENT_ID = process.env.NOTION_CLIENT_ID!;
const NOTION_CLIENT_SECRET = process.env.NOTION_CLIENT_SECRET!;
const NOTION_REDIRECT_URI = process.env.NOTION_REDIRECT_URI!;
const NOTION_TOKEN_URL = "https://api.notion.com/v1/oauth/token";


const clientBasic = Buffer.from(`${NOTION_CLIENT_ID}:${NOTION_CLIENT_SECRET}`).toString('base64');

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const authorizationCode = url.searchParams.get("code");

    if (!authorizationCode) {
        return NextResponse.json({ error: "Authorization code is missing" }, { status: 400 });
    }

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", authorizationCode);
    params.append("redirect_uri", NOTION_REDIRECT_URI);

    try {
        // Notion API로 토큰 요청
        const response = await fetch(NOTION_TOKEN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Notion-Version" : "2022-06-28",
                "Authorization" : `Basic ${clientBasic}`
            },
            body: params,
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json(errorData, { status: response.status });
        }

        const tokenData = await response.json();
        // 리디렉션할 URL
        const redirectUrl = new URL('/', request.url); // 루트 페이지로 리디렉션

        // 파라미터 추가 (예: access_token을 쿼리로 넘김)
        redirectUrl.searchParams.set('access_token', tokenData["access_token"]);

        // 리디렉션 수행
        return NextResponse.redirect(redirectUrl.toString());
    } catch (error) {
        console.error("Error fetching token:", error);
        return NextResponse.json({ error: "An error occurred while fetching the token" }, { status: 500 });
    }
}
