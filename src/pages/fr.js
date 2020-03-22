import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { Item, Link } from '../component'
import Layout from '../component/Layout'

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
      <Layout lang='fr'>
        <Flex>
          <Box px={10} width={1}>
            <LogoContainer>
              <Logo>SUPERSTARS</Logo>
              <span>Salons de coiffure</span>
            </LogoContainer>
          </Box>
        </Flex>
        <Flex flexWrap='wrap'>
          <Box px={10} width={[1, 0.5, 160/340]}>
            <Item>
              Salons de coiffure 1er arr. Paris et Daikanyama Tokyo.
              <br/>
              <br/>
              🇫🇷パリで働きたい美容師さん誰かいませんか？
            </Item>
            <Item title='Tokyo'>
              <Link href='http://goo.gl/maps/Fjqbs'>
                1-24-7 Ebisunishi Shibuyaku 150-0021 Tokyo,Japan
              </Link>
              <br/>
              Station de Daikanyama, station d'Ebisu
              <br/>
              Closed
              {' '}
              Fermé
              {' '}
              mercredi
              <br/>
              11:00-20:00
              <br/>
              Téléphone
              {' '}
              <a href='tel:+81-3-5428-0039'>
                +81-3-5428-0039
              </a>
              <br/>
              Facsimile
              {' '}
              +81-3-5428-0049
              <br/>
              Email
              {' '}
              <a href='mailto:tokyo@superstars.jp'>tokyo@superstars.jp</a>
              <br/>
              <br/>
              Coupe 6500yen~<br/>
              Coloration 6000yen~<br/>
              Permanente 7000yen~<br/>
              Soins 2000yen~<br/>
            </Item>
            <Item title='Paris'>
              <Link href='http://goo.gl/maps/klacH'>
                15 Rue d'Argenteuil 75001 Paris, France
              </Link>
              <br/>
              Metro Tuileries, Metro Pyramids
              <br/>
              Fermé
              {' '}
              Le lundi
              <br/>
              11:00-19:00
              <br/>
              Téléphone
              {' '}
              <a href='tel:33-142603710'>+33-1.42.60.37.10</a>
              <br/>
              Facsimile
              {' '}
              +33-1.42.60.39.04
              <br/>
              Email
              {' '}
              <a href='mailto:paris@superstars.jp'>paris@superstars.jp</a>
              <br/>
              <br/>
              Coupe 80euros~<br/>
              Coloration 70euros~<br/>
              Permanente 80euros~<br/>
            </Item>
          </Box>
          <Box px={10} width={[1, 0.5, 90/340]}>
            <Item title='Instagram'>
              <Link href='http://instagram.com/superstars.hairsalon'>@superstars.hairsalon</Link>
            </Item>
            <Item title='Facebook'>
              <Link href='https://www.facebook.com/superstars.hairsalon'>superstars.hairsalon</Link>
            </Item>
            <Item title='Twitter'>
              <Link href='https://twitter.com/Superstars_jp'>@Superstars_jp</Link>
            </Item>
            <Item title='Youtube'>
              <Link href='https://www.youtube.com/user/superstars75001/videos'>superstars75001</Link>
            </Item>
          </Box>
          <Box px={10} width={[1, 0.5, 90/340]}>
            <Item title='Mettre à jour'>
              <form
                action='//superstars.us10.list-manage.com/subscribe/post?u=bb759fc6f988fc3409d847443&amp;id=13e60509f6'
                method='post'
                target='_blank'
              >
                Entrez votre adresse email pour recevoir des mises à jour<br/>
                <EmailInput type='email' name='EMAIL'/>
                <input type='hidden' name='b_bb759fc6f988fc3409d847443_13e60509f6' value=''/>
                <SubscribeButton type='submit' value='Subscribe' name='subscribe'/>
              </form>
            </Item>
          </Box>
        </Flex>
      </Layout>
    )
  }
}
