"use client";

import styled from "styled-components";

const StyledIframeWrapper = styled.iframe`
    width: 100%;
    height: 100%;
`;

const MainWrapper = styled.div`
  /* 세로 스크롤 허용 */
  min-height: 100vh;       /* ✅ height 대신 min-height */
  overflow-y: auto;        /* ✅ 세로 스크롤 */

  display: flex;
  justify-content: center; /* 가운데 정렬 */
  background: #f0f0f0;
`;

/* 내용 폭을 넓게 (데스크톱에서 여유) */
const Container = styled.div`
  width: min(1200px, 96vw);  /* ✅ 가로 여유 */
  padding: 24px 32px;
`;

/* 이미지는 비율 유지 */
const StyledImage = styled.img`
  width: 100%;
  height: auto;              /* ✅ 비율 유지 (글씨도 같이 커짐) */
  display: block;
`;

export default function Home() {
    return (
        <MainWrapper>
            <Container>
                <StyledImage src="/example.png" alt="example" />
                {/* 여기에 텍스트/컴포넌트들 */}
            </Container>
        </MainWrapper>
    );
}
