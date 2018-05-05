import React, { createElement } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Grid, Cell } from 'rgx'
import { Emoji, Item, Link } from '../component'
import { getUserLangKey } from 'ptz-i18n'
import { withPrefix } from 'gatsby-link'

const SubscribeButton = styled.input`
  padding: 0;
  display: inline;
  border: none;
  font: inherit;
  background-color: rgba(255,0,0,0.35);
  color: black;
  text-decoration: none;
  &:hover {
    background-color: rgba(255,0,0,1);
    color: white;
  }
`
const EmailInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  display: inline;
  margin: 0;
  padding: 0;
  margin-right: 1em;
  width: 160px;
`
export default class Index extends React.PureComponent {
  // constructor(args) {
  //   super(args);
  //   if(typeof window !== 'undefined') {
  //     const { langs, defaultLangKey } = args.data.site.siteMetadata.languages
  //     const langKey = getUserLangKey(langs, defaultLangKey)
  //     if(langKey !== 'en') {
  //       const homeUrl = withPrefix(`/${langKey}/`)
  //       window.___history.replace(homeUrl)
  //     }
  //   }
  // }
  render() {
    return (
      <Grid gutter={10}>
        <Cell min={3*160}>
          <Item>
            Hair Salons in 1er arr Paris and Daikanyama Tokyo.<br/>
            東京 代官山とパリの1区にあるヘアサロン.<br/>
            🇫🇷パリで働きたい美容師さん誰かいませんか？
          </Item>
          <Item title='Tokyo'>
            <Link href='http://goo.gl/maps/Fjqbs'>
              1-24-7 Ebisunishi Shibuyaku 150-0021 Tokyo,Japan
            </Link>
            <br/>
            Daikanyama Station,Ebisu Station
            <br/>
            Closed Wednesday
            <br/>
            11:00-20:00
            <br/>
            Phone
            <Emoji name='telephone_receiver'/>
            <a href='tel:+81-3-5428-0039'>03-5428-0039</a>
            <br/>
            Facsimile 03-5428-0049
            <br/>
            Email <a href='mailto:tokyo@superstars.jp'>tokyo@superstars.jp</a>
            <br/>
            <br/>
            Cut 6500yen~<br/>
            Color 6000yen~<br/>
            Permanent 7000yen~<br/>
            Treatment 2000yen~<br/>
          </Item>
          <Item title='Paris'>
            <Link href='http://goo.gl/maps/klacH'>
              15 Rue d'Argenteuil 75001 Paris, France
            </Link>
            <br/>
            Metro Tuileries, Metro Pyramids
            <br/>
            Closed Sunday
            <br/>
            11:00-19:00
            <br/>
            Phone
            <Emoji name='telephone_receiver'/>
            <a href='tel:33-142603710'>01.42.60.37.10</a>
            <br/>
            Facsimile 01.42.60.39.04
            <br/>
            Email <a href='mailto:paris@superstars.jp'>paris@superstars.jp</a>
            <br/>
            <br/>
            Cut 65euro~<br/>
            Color 60euro~<br/>
            Permanent 70euro~<br/>
            Treatment 20euro~<br/>
          </Item>
        </Cell>
        <Cell min={3*90}>
          <Item title='Instagram'>
            <Link href='http://instagram.com/superstars.hairsalon'/>
          </Item>
          <Item title='Facebook'>
            <Link href='https://www.facebook.com/superstars.hairsalon'/>
          </Item>
          <Item title='Twitter'>
            <Link href='https://twitter.com/Superstars_jp'/>
          </Item>
          <Item title='Youtube'>
            <Link href='https://www.youtube.com/user/superstars75001/videos'/>
          </Item>
          <Item title='Origami'>
            <Link href='http://origami.co/superstars'/>
          </Item>
        </Cell>
        <Cell min={3*90}>
          <Item>
            <form 
              action='//superstars.us10.list-manage.com/subscribe/post?u=bb759fc6f988fc3409d847443&amp;id=13e60509f6'
              method='post'
              target='_blank'
            >
              Enter your email address<br/>
              to receive updates: 
              <EmailInput type='email' value='' name='EMAIL'/>
              <input type='hidden' name='b_bb759fc6f988fc3409d847443_13e60509f6' value=''/>
              <SubscribeButton type='submit' value='Subscribe' name='subscribe'/>
            </form>
          </Item>
        </Cell>
      </Grid>
    )
  }
}
export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`
