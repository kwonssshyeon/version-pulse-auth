"use client";

import './privacy.css';

export default function PrivacyPage() {
    return (
    <div className="privacy-container">
        <div className="privacy-content">
            <h1 className="privacy-title">개인정보 처리방침</h1>
            <p className="intro">
                <strong>Version-Pulse</strong>는 사용자의 개인정보를 수집하지 않으며, Notion API에 접근하기 위해 <strong>Access Token</strong>만을 사용합니다. 이 토큰은 Notion OAuth 인증을 통해 발급되며, 사용자의 Notion 계정에 접근할 수 있는 권한을 제공합니다.
            </p>
            <h2 className="section-title">1. 개인정보 수집</h2>
            <p>
                <strong>Version-Pulse</strong>는 사용자의 <strong>Access Token</strong>만을 수집합니다. 이 토큰은 Notion API와의 연결을 위해 사용되며, 사용자가 인증 후 제공됩니다.
            </p>
            <h2 className="section-title">2. Access Token 사용 목적</h2>
            <p>
                Access Token은 Notion API에 안전하게 접근하는 데 사용됩니다. 외부로 노출되지 않도록 주의해야 하며, 자동으로 갱신되지 않습니다. 노출된 토큰은 사용자가 수동으로 갱신해야 합니다.
            </p>
            <h2 className="section-title">3. 제3자 제공</h2>
            <p>
                <strong>Version-Pulse</strong>는 Access Token을 제3자에게 제공하지 않으며, 외부로 전송하지 않습니다.
            </p>
            <h2 className="section-title">4. 사용자 권리</h2>
            <p>
                사용자는 언제든지 Notion 계정에서 <strong>Access Token</strong>을 철회하거나 갱신할 수 있습니다.
            </p>
            <h2 className="section-title">5. 문의</h2>
            <p>
                궁금한 사항은 아래로 문의해 주세요.
            </p>
            <p><strong>이메일:</strong> <a href="kwonsh4396@gmail.com">kwonsh4396@gmail.com</a></p>
        </div>
    </div>
    );
}
