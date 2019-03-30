import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Link from 'gatsby-link'

const GlobalStyle = createGlobalStyle`
  @import url(https://afeld.github.io/emoji-css/emoji.css);
  body {
    margin: 0;
    font-family: verdana, courier, monospace;
    font-size: 13px;
    line-height: 20px;
    color: black;
  }
  a {
    color: red;
    text-decoration: underline;
    &:hover {
      background-color: rgba(255,0,0,1);
      color: white;
      text-decoration: none;
    }
  }
`
const LangSwitch = styled.div`
  position: absolute;
  right: 6%;
  top: 2%;
  z-index: 1;
`
const Lang = ({ disabled, ...props }) => {
  const Comp = (disabled ? styled.span : styled(Link))`
    margin-right: 1em;
  `
  return <Comp {...props}/>
}
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
export default class Layout extends React.Component {
  render() {
    const { lang, children } = this.props
    return (
      <>
        <GlobalStyle/>
        <Container>
          <LangSwitch>
            <Lang disabled={lang === 'en'} to='/en/'>En</Lang>
            <Lang disabled={lang === 'ja'} to='/ja/'>日</Lang>
            <Lang disabled={lang === 'fr'} to='/fr/'>Fr</Lang>
          </LangSwitch>
          { children }
        </Container>
      </>
    )
  }
}
