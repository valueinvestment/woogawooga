import styled from "styled-components";
import Image from "next/image";
import { DivideCarousel } from "./DivideCarousel";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
  max-width: 400px;
`;

const launchingDate = new Date("2023-04-05");

//특정 일을 기준으로 날짜를 계산
function getDiffDate(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffDate = Math.ceil(diff / (1000 * 3600 * 24));
  return diffDate;
}

const Footer: React.FC = () => (
  <>
    <FooterContainer>
      <DivideCarousel width="450px" height="80px" />
      <h3 style={{ marginTop: "1rem" }}>투자 문의 / 아이디어 제안</h3>
      <a
        href="mailto: oogaooga.app@gmail.com"
        style={{
          margin: "0rem",
          marginTop: "0.3rem",
          textDecoration: "underline",
          color: "#7B42AD",
          textUnderlineOffset: "5px",
        }}
      >
        oogaooga.app@gmail.com
      </a>
      <p style={{ margin: "0rem", marginTop: "1rem" }}>
        <span style={{ fontWeight: "bold" }}>Since</span> 2023.04.05 (D+
        {getDiffDate(launchingDate)})
      </p>
      <div style={{ marginTop: "1rem" }}>
        <Image src="/assets/ccl.png" width="180px" height="64px" alt="ccl" />
      </div>
      <p style={{ margin: "0rem", marginTop: "0.5rem" }}>
        <span style={{ fontSize: "0.8rem" }}>Copyright © 2023. 우가?우가!</span>
      </p>
      <p style={{ margin: "0rem" }}>
        <span style={{ fontSize: "0.8rem" }}>
          우가?우가! OOGA?OOGA! All rights reserved.
        </span>
      </p>
    </FooterContainer>
  </>
);

export { Footer };
