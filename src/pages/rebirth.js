import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled'


const RebirthContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RebirthEdition = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`

const EditionSection = styled.div`
  display: flex;
  flex-direction: column;
  writing-mode: vertical-rl;
  text-orientation: upright;
  
`

const EditionNumber = styled.div`
  font-size: 1rem;
`

const EditionDate = styled.div`
  font-size: 1rem;
`

const EditionTitle = styled.div`
  /* font-weight: bold; */
  font-size: 1.5rem;
`

const EditionNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`

const NavItem = styled(props => <Link {...props} />)`
  font-family: Arial;
  font-size: 1rem;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Rebirth = () => {
  return (
    <RebirthContainer>
      <RebirthEdition>
        <EditionSection>
          <EditionNumber>001</EditionNumber>
          <EditionDate>2020</EditionDate>
          <EditionDate>April 12</EditionDate>
        </EditionSection>
        <EditionTitle>
          THE
          <br />
          REBIRTH
        </EditionTitle>
      </RebirthEdition>
      <EditionNav>
        <NavItem to='/peace'>In Search of Peace</NavItem>
      </EditionNav>
    </RebirthContainer>
  )
}

export default Rebirth;