import React, { createElement } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Emoji, Item, Link } from '../component'
import { FormattedMessage } from 'react-intl'

const SubscribeButton = styled.input`
  padding: 0;
  display: inline;
  border: none;
  font: inherit;
  color: red;
  text-decoration: underline;
  background-color: transparent;
  &:hover {
    background-color: red;
    color: white;
    text-decoration: none;
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

export default class Index extends React.Component {
  render() {
    return (
      <Flex flexWrap='wrap'>
        <Box px={10} width={[1, 0.5, 160/340]}>
          <Item>
            <FormattedMessage id='Hair Salons in Paris and Daikanyama Tokyo.'/>
            <br/>
            <br/>
            🇫🇷パリで働きたい美容師さん誰かいませんか？
          </Item>
          <Item title='Tokyo'>
            <Link href='http://goo.gl/maps/Fjqbs'>
              <FormattedMessage id='1-24-7 Ebisunishi Shibuyaku 150-0021 Tokyo,Japan'/>
            </Link>
            <br/>
            <FormattedMessage id='Daikanyama Station,Ebisu Station'/>
            <br/>
            <FormattedMessage id='Closed'/>{' '}
            <FormattedMessage id='Wednesday'/>
            <br/>
            11:00-20:00
            <br/>
            <FormattedMessage id='Phone' />
            <Emoji name='telephone_receiver'/>
            <a href='tel:+81-3-5428-0039'>
              <FormattedMessage id='+81-3-5428-0039'/>
            </a>
            <br/>
            <FormattedMessage id='Facsimile'/>{' '}
            <FormattedMessage id='+81-3-5428-0049'/>
            <br/>
            <FormattedMessage id='Email'/>{' '}
            <a href='mailto:tokyo@superstars.jp'>tokyo@superstars.jp</a>
            <br/>
            <br/>
            <FormattedMessage id='Cut'/> 6500<FormattedMessage id='yen'/>~<br/>
            <FormattedMessage id='Color'/> 6000<FormattedMessage id='yen'/>~<br/>
            <FormattedMessage id='Permanent'/> 7000<FormattedMessage id='yen'/>~<br/>
            <FormattedMessage id='Treatment'/> 2000<FormattedMessage id='yen'/>~<br/>
      </Item>
      <Item title='Paris'>
        <Link href='http://goo.gl/maps/klacH'>
          <FormattedMessage id={`15 Rue d'Argenteuil 75001 Paris, France`}/>
        </Link>
        <br/>
        <FormattedMessage id='Metro Tuileries, Metro Pyramids'/>
        <br/>
        <FormattedMessage id='Closed'/>{' '}
        <FormattedMessage id='Sunday'/>
        <br/>
        11:00-19:00
        <br/>
        <FormattedMessage id='Phone'/>
        <Emoji name='telephone_receiver'/>
        <a href='tel:33-142603710'>+33-1.42.60.37.10</a>
        <br/>
        <FormattedMessage id='Facsimile'/>{' '}
        <FormattedMessage id='+33-1.42.60.39.04'/>
        <br/>
        <FormattedMessage id='Email'/>{' '}
        <a href='mailto:paris@superstars.jp'>paris@superstars.jp</a>
        <br/>
        <br/>
        <FormattedMessage id='Cut'/> 65<FormattedMessage id='euro'/>~<br/>
      <FormattedMessage id='Color'/> 60<FormattedMessage id='euro'/>~<br/>
      <FormattedMessage id='Permanent'/> 70<FormattedMessage id='euro'/>~<br/>
      <FormattedMessage id='Treatment'/> 20<FormattedMessage id='euro'/>~<br/>
      </Item>
      </Box>
      <Box px={10} width={[1, 0.5, 90/340]}>
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
      </Box>
      <Box px={10} width={[1, 0.5, 90/340]}>
        <Item title='Updates'>
          <form 
            action='//superstars.us10.list-manage.com/subscribe/post?u=bb759fc6f988fc3409d847443&amp;id=13e60509f6'
            method='post'
            target='_blank'
          >
            <FormattedMessage id='Enter your email address to receive updates.'/><br/>
            <EmailInput type='email' value='' name='EMAIL'/>
            <input type='hidden' name='b_bb759fc6f988fc3409d847443_13e60509f6' value=''/>
            <SubscribeButton type='submit' value='Subscribe' name='subscribe'/>
          </form>
        </Item>
      </Box>
      </Flex>
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
