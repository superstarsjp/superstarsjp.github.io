import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Item } from '../component'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'
import 'intl'
import Link from 'gatsby-link'
import { addLocaleData, FormattedMessage } from 'react-intl'

import messages from '../data/messages'
import ja from 'react-intl/locale-data/ja'
import 'intl/locale-data/jsonp/ja'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'
import fr from 'react-intl/locale-data/fr'
import 'intl/locale-data/jsonp/fr'

addLocaleData(ja)
addLocaleData(en)
addLocaleData(fr)

injectGlobal`
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
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
`
const Logo = styled.h1`
  font-size: 13px;
  font-weight: normal;
  color: red;
  margin:0;
  padding:0;
  margin-right: 1em;
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
export default class Layout extends React.Component {
  render() {
    const { data, children, location } = this.props
    const { site: { siteMetadata: { languages, title, description, email } }} = data
    const { langs, defaultLangKey } = languages
    const langKey = getCurrentLangKey(langs, defaultLangKey, location.pathname)
    return (
      <IntlProvider
        locale={langKey}
        messages={messages[langKey]}
      >
        <Container>
          <LangSwitch>
            <Lang disabled={langKey === 'en'} to='/'>En</Lang>
            <Lang disabled={langKey === 'ja'} to='/ja/'>日</Lang>
            <Lang disabled={langKey === 'fr'} to='/fr/'>Fr</Lang>
          </LangSwitch>
          <Flex>
            <Box px={10} width={1}>
              <LogoContainer>
                <Logo>{title}</Logo>
                <span><FormattedMessage id='HAIR SALON' /></span>
              </LogoContainer>
            </Box>
          </Flex>
          { children() }
        </Container>
      </IntlProvider>
    )
  }
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
