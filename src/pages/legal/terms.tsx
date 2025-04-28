// pages/legal/terms.tsx

import './terms.css';

export default function TermsOfService() {
    return (
        <div className="container">
            <div className="content">
                <h1 className="title">서비스 이용 약관</h1>
                <section className="section">
                <h2 className="subtitle">1. 서비스 개요</h2>
                <p>
                    본 서비스는 SpringBoot 프로젝트의 API 명세서를 Notion에 자동으로 업데이트하는 기능을 제공합니다. 사용자는 이를 통해 Notion에서 관리되는 API 문서를 자동으로 최신 상태로 유지할 수 있습니다.
                </p>
                </section>
                <section className="section">
                <h2 className="subtitle">2. 사용자의 의무</h2>
                <p>
                    사용자는 본 서비스에 접근하기 위해 Notion API의 접근 권한을 부여해야 합니다. 이를 위해 사용자는 본 서비스의 OAuth 인증 절차를 완료해야 하며, 인증된 토큰을 통해 API 명세서 업데이트가 이루어집니다. 사용자는 제공되는 API 명세서가 정확하고 최신 정보임을 보장하며, 이를 통해 발생하는 모든 결과에 대해 책임을 집니다.
                </p>
                </section>
                <section className="section">
                <h2 className="subtitle">3. 서비스 제공</h2>
                <p>
                    본 서비스는 사용자가 제공한 Notion 계정에 연결된 API 문서를 자동으로 업데이트하는 기능을 제공합니다. 서비스는 명세서의 내용을 자동으로 갱신하거나 추가하는 등의 작업을 수행할 수 있습니다. 이 과정에서 발생하는 데이터 변경에 대해서는 사용자가 사전에 승인한 범위 내에서만 작업이 이루어집니다.
                </p>
                </section>
                <section className="section">
                <h2 className="subtitle">4. 서비스의 중단 및 변경</h2>
                <p>
                    본 서비스는 언제든지 서비스의 일부 또는 전체를 중단하거나 변경할 수 있습니다. 이 경우 서비스 이용자는 사전에 공지된 절차를 통해 서비스를 종료하거나 변경된 사항을 반영할 수 있습니다. 사용자는 서비스 이용 중 발생할 수 있는 불편 사항에 대해 사전 고지 없이 서비스를 종료할 수 있습니다.
                </p>
                </section>
                <section className="section">
                <h2 className="subtitle">5. 개인정보 보호</h2>
                <p>
                    본 서비스는 사용자로부터 개인정보를 수집하지 않습니다. Notion API를 사용하여 사용자의 Notion 계정에 접근하며, 해당 과정에서 사용되는 데이터는 사용자의 Notion 계정과 관련된 API 명세서에 한정됩니다. 사용자는 자신의 액세스 토큰이 외부로 유출되지 않도록 주의해야 하며, 이 토큰은 자동으로 갱신되지 않습니다.
                </p>
                </section>
                <section className="section">
                <h2 className="subtitle">6. 책임의 한계</h2>
                <p>
                    본 서비스는 제공된 Notion API와 관련된 작업을 자동으로 수행하며, API 사용에 따른 책임은 전적으로 사용자가 집니다. 서비스 제공자는 API 문서 관리 및 업데이트와 관련된 기술적 지원을 제공하나, 사용자가 입력한 데이터에 대해서는 책임지지 않습니다.
                </p>
                </section>
                <section className="section">
                <h2 className="subtitle">7. 서비스의 변경 또는 종료</h2>
                <p>
                    서비스 제공자는 본 서비스의 이용 조건을 변경하거나 서비스를 중단할 수 있습니다. 변경사항은 사전에 공지됩니다. 서비스 중단 시 사용자는 본 서비스를 통한 업데이트나 작업이 중단될 수 있음을 인지하고 이에 대한 책임을 집니다.
                </p>
                </section>
                <section className="section">
                <h2 className="subtitle">8. 법적 책임</h2>
                <p>
                    본 서비스는 사용자가 Notion API를 사용하여 발생한 법적 책임에 대해 어떠한 책임도 지지 않습니다. 사용자는 Notion의 이용 약관을 준수할 의무가 있습니다.
                </p>
                </section>
            </div>
        </div>
    );
}
