import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Grid, Cell } from 'rgx'
import { Item } from '../component'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'
import 'intl'
import Link from 'gatsby-link'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
  @import url(https://afeld.github.io/emoji-css/emoji.css);
  body {
    margin: 0;
    font-family: 'Source Code Pro', monospace;
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
const LangSwitch = styled.div`
  position: absolute;
  right: 6%;
  top: 2%;
  z-index: 1;
`
const Lang = styled(Link)`
  margin-right: 1em;
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Logo = styled.h1`
  font-size: 13px;
  font-weight: normal;
  color: red;
  margin:0;
  padding:0;
  margin-right: 1em;
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
export default ({ data, children, i18nMessages }) => {
  const { site: { siteMetadata: { languages, title, description, email } }} = data
  const url = typeof window !== 'undefined' ? location.pathname : ''
  const { langs, defaultLangKey } = languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <Container>
        <LangSwitch>
          <Lang to={`/`}>En</Lang>
          <Lang to={`/ja/`}>日</Lang>
          <Lang to={`/fr/`}>Fr</Lang>
        </LangSwitch>
        <Grid gutter={10}>
          <Cell min={3*160}>
            <LogoContainer>
              <Logo>{title}</Logo>
              <span>HAIR SALON</span>
            </LogoContainer>
          </Cell>
          <Cell min={3*90}>
          </Cell>
          <Cell min={3*90}>
          </Cell>
        </Grid>
        { children() }
      </Container>
    </IntlProvider>
  )
}
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        email
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`
