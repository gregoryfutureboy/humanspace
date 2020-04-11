import React from "react"
import Layout from "./src/components/layout"
import { GlobalStyle } from "./src/theme/globalStyle"

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </>
)
