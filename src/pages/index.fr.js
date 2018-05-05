import React, { createElement } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Grid, Cell } from 'rgx'
import { Emoji, Item, Link } from '../component'

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
export default ({ data }) => {
  return (
    <Grid gutter={10}>
      <Cell min={3*160}>
        <Item>
          Salons de coiffure 1er arr. Paris et Daikanyama Tokyo.<br/>
        </Item>
        <Item title='Tokyo'>
          <Link href='http://goo.gl/maps/Fjqbs'>
            1-24-7 Ebisunishi Shibuyaku 150-0021 Tokyo,Japan
          </Link>
          <br/>
          Station de Daikanyama, station d'Ebisu
          <br/>
          Fermé mercredi
          <br/>
          11:00-20:00
          <br/>
          téléphone
          <Emoji name='telephone_receiver'/>
          <a href='tel:+81-3-5428-0039'>+81-3-5428-0039</a>
          <br/>
          Facsimilé +81-3-5428-0049
          <br/>
          Email <a href='mailto:tokyo@superstars.jp'>tokyo@superstars.jp</a>
          <br/>
          <br/>
          Coupe 8000yen~<br/>
          Coloration 6000yen~<br/>
          Permanente 7000yen~<br/>
          Soins 2000yen~<br/>
        </Item>
        <Item title='Paris'>
          <Link href='http://goo.gl/maps/klacH'>
            15 Rue d'Argenteuil 75001 Paris, France
          </Link>
          <br/>
          Métro Tuileries,Métro Pyramides
          <br/>
          Fermé dimanche
          <br/>
          11:00-19:00
          <br/>
          téléphone
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
        <Item title='Updates'>
          <form 
            action='//superstars.us10.list-manage.com/subscribe/post?u=bb759fc6f988fc3409d847443&amp;id=13e60509f6'
            method='post'
            target='_blank'
          >
            Entrez votre adresse email
            pour recevoir des mises à jour:<br/>
            <EmailInput type='email' value='' name='EMAIL'/>
            <input type='hidden' name='b_bb759fc6f988fc3409d847443_13e60509f6' value=''/>
            <SubscribeButton type='submit' value='Subscribe' name='subscribe'/>
          </form>
        </Item>
      </Cell>
    </Grid>
  )
}
export const query = graphql`
  query IndexQueryFr {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
