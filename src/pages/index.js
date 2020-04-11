import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';

const HeroContainer = styled.header`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px;
`

const HeroSection = styled.div`
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #FFAFCC 0%, rgba(255, 189, 252, 0) 77.35%);
`

const HeroTitle = styled.h1`
  font-size: 82px;
  font-weight: bold;
  margin: 1rem 0;
  color: #fff;
`

const HeroSubtitle = styled.h3`
  font-size: 24px;
  margin: 1rem 0;
  color: #fff;
`

const WeeklyDoseContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const WeeklyDoseTitle = styled.h5`
  font-size: 1rem;
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
          <Link to='/rebirth'>
            <WeeklyDoseTitle>The Rebirth</WeeklyDoseTitle>
          </Link>
        </WeeklyDoseContainer>
      </>
    )
}

export default IndexPage
