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
          東京 代官山とパリの1区にあるヘアサロン.<br/>
          🇫🇷パリで働きたい美容師さん誰かいませんか？
        </Item>
        <Item title='東京店'>
          <Link href='http://goo.gl/maps/Fjqbs'>
            150-0021
            東京都渋谷区恵比寿西 1-24-7
          </Link>
          <br/>
          最寄り駅: 東横線 代官山, JR恵比寿駅
          <br/>
          定休日 水曜日
          <br/>
          営業時間 11:00-20:00
          <br/>
          電話番号
          <Emoji name='telephone_receiver'/>
          <a href='tel:+81-3-5428-0039'>03-5428-0039</a>
          <br/>
          FAX 03-5428-0049
          <br/>
          お問い合わせメールアドレス{' '}
          <a href='mailto:tokyo@superstars.jp'>tokyo@superstars.jp</a>
          <br/>
          <br/>
          カット 6500円~<br/>
          カラー 6000円~<br/>
          パーマ 7000円~<br/>
          トリートメント 2000円~<br/>
        </Item>
        <Item title='パリ店'>
          <Link href='http://goo.gl/maps/klacH'>
            15 Rue d'Argenteuil 75001 Paris, France
          </Link>
          <br/>
          Métro Tuileries,Métro Pyramides
          <br/>
          定休日 日曜日
          <br/>
          営業時間 11:00-19:00
          <br/>
          電話番号
          <Emoji name='telephone_receiver'/>
          <a href='tel:33-142603710'>+33-1.42.60.37.10</a>
          <br/>
          FAX +33-1.42.60.39.04
          <br/>
          お問い合わせメールアドレス{' '}
          <a href='mailto:paris@superstars.jp'>paris@superstars.jp</a>
          <br/>
          <br/>
          カット 80ユーロ~<br/>
          カラー 60ユーロ~<br/>
          パーマ 70ユーロ~<br/>
          トリートメント 20ユーロ~<br/>
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
        <Item title='更新情報'>
          <form 
            action='//superstars.us10.list-manage.com/subscribe/post?u=bb759fc6f988fc3409d847443&amp;id=13e60509f6'
            method='post'
            target='_blank'
          >
            最新情報をご希望の方はメールマガジンをご登録いただけます
            <EmailInput type='email' value='' name='EMAIL'/>
            <input type='hidden' name='b_bb759fc6f988fc3409d847443_13e60509f6' value=''/>
            <SubscribeButton type='submit' value='登録' name='subscribe'/>
          </form>
        </Item>
      </Cell>
    </Grid>
  )
}
export const query = graphql`
  query IndexQueryJa {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
