import { NextResponse } from "next/server";

const NOTION_CLIENT_ID = process.env.NOTION_CLIENT_ID!;
const NOTION_REDIRECT_URI = process.env.NOTION_REDIRECT_URI!;
const NOTION_AUTH_URL = "https://api.notion.com/v1/oauth/authorize";

export function GET() {
    const url = new URL(NOTION_AUTH_URL);
    url.searchParams.set("client_id", NOTION_CLIENT_ID);
    url.searchParams.set("response_type", "code");
    url.searchParams.set("owner", "user");
    url.searchParams.set("redirect_uri", NOTION_REDIRECT_URI);

    return NextResponse.redirect(url.toString());
}
