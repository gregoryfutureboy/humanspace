import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled'


const RebirthContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

const RebirthEdition = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;
  display: flex;
  width: 100%;
  justify-content: flex-end;
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
  grid-column: 4 / span 2;
  grid-row: 3/4;
  align-self: flex-end;
  font-size: 1.5rem;
`

const EditionNav = styled.div`
  grid-column: 4/ span 2;
  grid-row: 5/6;
  display: flex;
  justify-content: flex-start;
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
      </RebirthEdition>
      <EditionTitle>
        THE
        <br />
        REBIRTH
      </EditionTitle>
      <EditionNav>
        <NavItem to="/peace">In Search of Peace</NavItem>
      </EditionNav>
    </RebirthContainer>
  )
}

export default Rebirth;