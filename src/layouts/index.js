import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Grid, Cell } from 'rgx'

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
const Emoji = styled.i.attrs({
  className: props => `em em-${props.name}`
})`
  height: 1em;
  margin: 0 0.5em;
`
const Logo = styled.h1`
  font-size: 13px;
  color: red;
  margin-bottom: 4em;
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
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Label = styled.span`
  text-decoration: underline;
  text-align: right;
`
const Link = styled.a.attrs({
  target: '_blank',
  children: props => props.children || props.href
})`
`
const Body = styled.div`
  margin-bottom: 2em;
`
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

const Item = ({ min = 270, title, children }) => (
  <Grid gutter={10}>
    <Cell min={min * 1/4}>
      { title && <Right><Label>{title}</Label></Right> }
    </Cell>
    <Cell min={min * 3/4}>
      <Body>{ children }</Body>
    </Cell>
  </Grid>
)
export default ({ data, children }) => {
  const { site: { siteMetadata: { title, description, email } }} = data
  return (
    <Container>
      <Grid gutter={10}>
        <Cell min={3*160}>
          <Item>HAIR SALON</Item>
        </Cell>
        <Cell min={3*90}>
          <Item>tokyo<br/>paris</Item>
        </Cell>
        <Cell min={3*90}>
          <Item>(c)2018, superstars</Item>
        </Cell>
      </Grid>
      <Grid gutter={10}>
        <Cell min={1}>
          <Logo>{title}</Logo>
        </Cell>
      </Grid>
      <Grid gutter={10}>
        <Cell min={3*160}>
          <Item>
            Hair Salons in 1er arr Paris and Daikanyama Tokyo.<br/>
            Salons de coiffure 1er arr. Paris et Daikanyama Tokyo.<br/>
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
            Métro Tuileries,Métro Pyramides
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
            Coupe 80euros~<br/>
            Coloration 60euros~<br/>
            Permanente 70euros~<br/>
            Soins 20euros~<br/>
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
              target='_blank' novalidate=''
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
