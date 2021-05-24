import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Contents>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            eaque. Rerum exercitationem commodi unde nostrum aut quod soluta
            aliquid recusandae?
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Contents>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Contents = styled.div`
  /* margin-bottom: 10vw; */
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-position: top;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 650px;
  min-height: 1px;
  display: block;
  width: 100%;
  margin: 0 auto;
`;

const SignUp = styled.a`
  padding: 15px 0;
  font-weight: bold;
  border-radius: 5px;
  background-color: #0063e5;
  color: #f9f9f9;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  margin-top: 10px;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Description = styled.p`
  padding: 0;
  font-size: 12px;
  letter-spacing: 1.5px;
  line-height: 1.5;
  opacity: 0.8;
  margin-bottom: 15px;
`;

const CTALogoTwo = styled.img``;
export default Login;
