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
      <Layout lang='ja'>
        <Flex>
          <Box px={10} width={1}>
            <LogoContainer>
              <Logo>SUPERSTARS</Logo>
              <span>美容室</span>
            </LogoContainer>
          </Box>
        </Flex>
        <Flex flexWrap='wrap'>
          <Box px={10} width={[1, 0.5, 160/340]}>
            <Item>
              東京 代官山とパリの1区にあるヘアサロン
              <br/>
              <br/>
              🇫🇷パリで働きたい美容師さん誰かいませんか？
            </Item>
            <Item title='東京店'>
              <Link href='http://goo.gl/maps/Fjqbs'>
                150-0021 東京都渋谷区恵比寿西1-24-7
              </Link>
              <br/>
              代官山駅・恵比寿駅
              <br/>
              定休日
              {' '}
              水曜日
              <br/>
              営業時間
              {' '}
              11:00-20:00
              <br/>
              電話番号
              {' '}
              <a href='tel:+81-3-5428-0039'>
                03-5428-0039
              </a>
              <br/>
              FAX
              {' '}
              03-5428-0049
              <br/>
              メールアドレス
              {' '}
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
              Metro Tuileries, Metro Pyramids
              <br/>
              定休日
              {' '}
              月曜日
              <br/>
              営業時間
              {' '}
              11:00-19:00
              <br/>
              電話番号
              {' '}
              <a href='tel:33-142603710'>+33-1.42.60.37.10</a>
              <br/>
              FAX
              {' '}
              +33-1.42.60.39.04
              <br/>
              メールアドレス
              {' '}
              <a href='mailto:paris@superstars.jp'>paris@superstars.jp</a>
              <br/>
              <br/>
              カット 80ユーロ~<br/>
              カラー 70ユーロ~<br/>
              パーマ 80ユーロ~<br/>
            </Item>
          </Box>
          <Box px={10} width={[1, 0.5, 90/340]}>
            <Item title='インスタグラム'>
              <Link href='http://instagram.com/superstars.hairsalon'>@superstars.hairsalon</Link>
            </Item>
            <Item title='フェイスブック'>
              <Link href='https://www.facebook.com/superstars.hairsalon'>superstars.hairsalon</Link>
            </Item>
            <Item title='ツイッター'>
              <Link href='https://twitter.com/Superstars_jp'>@Superstars_jp</Link>
            </Item>
            <Item title='Youtube'>
              <Link href='https://www.youtube.com/user/superstars75001/videos'>superstars75001</Link>
            </Item>
          </Box>
          <Box px={10} width={[1, 0.5, 90/340]}>
            <Item title='更新情報'>
              <form
                action='//superstars.us10.list-manage.com/subscribe/post?u=bb759fc6f988fc3409d847443&amp;id=13e60509f6'
                method='post'
                target='_blank'
              >
                最新情報をご希望の方はメールマガジンをご登録いただけます<br/>
                <EmailInput type='email' name='EMAIL'/>
                <input type='hidden' name='b_bb759fc6f988fc3409d847443_13e60509f6' value=''/>
                <SubscribeButton type='submit' value='購読' name='subscribe'/>
              </form>
            </Item>
          </Box>
        </Flex>
      </Layout>
    )
  }
}
