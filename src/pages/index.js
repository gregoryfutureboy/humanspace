import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { device } from './../utils/device'

const HeroContainer = styled.header`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px;

  @media ${device.tablet} {
    padding: 40px;
  }

  @media ${device.mobileL} {
    padding: 20px;
  }
`

const HeroSection = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    100% 427.24% at 0% 0%,
    rgba(255, 0, 0, 0.03) 0%,
    #ff9dc0 100%
  );
  border-radius: 8px;


`

const HeroTitle = styled.h1`
  font-size: 82px;
  font-weight: bold;
  margin: 1rem 0;
  color: #fff;

  @media ${device.tablet} {
    font-size: 48px;
  }

  @media ${device.mobileL} {
    font-size: 40px;
  }
`

const HeroSubtitle = styled.h3`
  font-size: 24px;
  margin: 1rem 0;
  color: #fff;
  
  @media ${device.tablet} {
    font-size: 20px;
  }
`

const WeeklyDoseContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const WeeklyDoseTitle = styled(props => <Link {...props} />)`
  font-size: 1rem;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query LandingPage {
      contentfulLandingPage {
        heroTitle
        heroSubtitle
      }
    }
  `)
    
    console.log(data)

    return (
      <>
        <HeroContainer>
          <HeroSection>
            <HeroTitle>{data.contentfulLandingPage.heroTitle}</HeroTitle>
            <HeroSubtitle>
              {data.contentfulLandingPage.heroSubtitle}
            </HeroSubtitle>
          </HeroSection>
        </HeroContainer>
        <WeeklyDoseContainer>
            <WeeklyDoseTitle to="/rebirth" styles={css`
              &:active {
                color: 'pink';
              }
              &:hover {
                color: 'black',
              }
            `}>The Rebirth</WeeklyDoseTitle>
        </WeeklyDoseContainer>
      </>
    )
}

export default IndexPage
