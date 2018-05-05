import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Grid, Cell } from 'rgx'
import { Item } from '../component'

injectGlobal`
  @import url(https://afeld.github.io/emoji-css/emoji.css);
  body {
    margin: 0;
    font-family: monospace;
    font-size: 13px;
    line-height: 20px;
    color: black;
  }
  a {
    background-color: rgba(255,0,0,0.35);
    color: black;
    text-decoration: none;
    &:hover {
      background-color: rgba(255,0,0,1);
      color: white;
    }
  }
`
const Logo = styled.h1`
  font-size: 13px;
  color: red;
  margin-bottom: 3em;
`
const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 2% 6%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`
export default ({ data, children }) => {
  const { site: { siteMetadata: { title, description, email } }} = data
  return (
    <Container>
      <Grid gutter={10}>
        <Cell min={3*160}>
          <Logo>{title}</Logo>
        </Cell>
        <Cell min={3*90}>
          <Item>HAIR SALON</Item>
        </Cell>
        <Cell min={3*90}>
          <Item>tokyo, paris</Item>
        </Cell>
      </Grid>
      { children() }
    </Container>
  )
}
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        email
      }
    }
  }
`
