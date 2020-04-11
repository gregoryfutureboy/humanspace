import React from "react"
import Layout from "./src/components/layout"
import { GlobalStyle } from "./src/theme/global-style"

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </>
)
