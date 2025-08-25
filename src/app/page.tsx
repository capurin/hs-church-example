"use client";

import styled from "styled-components";

const StyledImage = styled.iframe`
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

export default function Home() {
  return (
      <MainWrapper>
        <StyledImage
            src="http://pf.kakao.com/_Aruexj/110537463"

        />
      </MainWrapper>
  );
}
