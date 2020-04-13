import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Peace = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulWeeklyDoseArticleArticlePost2RichTextNode {
        nodes {
          json
        }
      }
      allContentfulAsset(filter: { title: { eq: "Nefertiti" } }) {
        nodes {
          id
          fixed {
            src
          }
        }
      }
    }
  `)

  console.log(data)

  const document =
    data.allContentfulWeeklyDoseArticleArticlePost2RichTextNode.nodes[0].json

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraphs>{children}</Paragraphs>,
    },
  }

  return (
    <ArticleContainer>
      <ArticleTitle>In Search of Peace</ArticleTitle>
      <ArticleInformationContainer>
        <ArticleInformation>
          <p>The Rebirth — Weekly Dose — 001</p>
        </ArticleInformation>
        <ArticleInformation>
          <p>April 12th, 2020</p>
        </ArticleInformation>
      </ArticleInformationContainer>
      <ArticleImage src={data.allContentfulAsset.nodes[0].fixed.src} />
      <Article>{documentToReactComponents(document, options)}</Article>
    </ArticleContainer>
  )
}

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr) min-content;
`

const ArticleTitle = styled.h1`
  grid-column: 5 / span 8;
  grid-row: 6/7;
  font-family: Arial;
  font-weight: bold;
  font-size: 80px;
`

const ArticleInformationContainer = styled.div`
  grid-column: 7 / span 4;
  grid-row: 7/8;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ArticleInformation = styled.span`
  margin: 0.3rem 0;
  font-size: 20px;
`

const ArticleImage = styled.img`
  grid-column: 2/span 4;
  grid-row: 9/span 8;
  width: 434px;
  margin-left: 4rem;
`

const Article = styled.div`
  grid-column: 7 / span 4;
  grid-row: 10 / span 8;
`

const Paragraphs = styled.p`
  line-height: 2rem;
  font-size: 20px;
  margin: 2rem 0;
`

export default Peace;