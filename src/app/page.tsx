"use client";

import { useState, useEffect } from "react";
import "./style.css";

export default function HomePage() {
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const startOAuth = () => {
        window.location.href = "/notion/oauth/start";
    };

    const copyToClipboard = () => {
        if (accessToken) {
            navigator.clipboard.writeText(accessToken).then(() => {
                alert("NOTION KEY가 복사되었습니다.");
            }).catch((err) => {
                console.error("Failed to copy text: ", err);
            });
        }
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const encodedAccessToken = urlParams.get("access_token");
        if (encodedAccessToken) {
            try {
                const decodedAccessToken = atob(encodedAccessToken);
                setAccessToken(decodedAccessToken);
            } catch (error) {
                console.error("Error decoding the access token:", error);
            }
        }
    }, []);

    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Notion OAuth Authentication</h1>

                {/* access_token을 받아오면 표시 */}
                {accessToken ? (
                    <div>
                        <h3>Access Token</h3>
                        <div className="token-box">
                            <p>{accessToken}</p>
                            <button className="copy-button" onClick={copyToClipboard}>
                                복사
                            </button>
                        </div>
                    </div>
                ) : (
                    <button onClick={startOAuth} className="auth-button">
                        GET NOTION KEY
                    </button>
                )}
            </div>
        </div>
    );
}