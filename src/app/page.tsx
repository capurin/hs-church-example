"use client";

import styled from "styled-components";

const StyledIframeWrapper = styled.iframe`
    width: 100%;
    height: 100%;
`;


const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
`;


const Frame = styled.div`
  width: 100%;
  height: 100vh;   /* 부모가 명확한 높이를 가져야 함 */
`;

const ContainImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;  /* ✅ 전체 보임, 여백 생김 */
    background: #f0f0f0;  /* 여백색 */
`;





export default function Home() {
  return (
      <MainWrapper>
          <Frame>
              <ContainImg src="/example.png" alt="example" />
          </Frame>
      </MainWrapper>
  );
}
