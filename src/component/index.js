import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { FormattedMessage } from 'react-intl'

export const Emoji = styled.i.attrs({
  className: props => `em em-${props.name}`
})`
  height: 1em;
  margin: 0 0.5em;
`
export const Link = styled.a.attrs({
  target: props => props.target || '_blank',
  children: props => props.children || props.href
})`
  word-break:break-word;
`
const Label = styled(Box)`
  overflow: hidden;
  text-decoration: underline;
  text-align: right;
`
const Body = styled(Box).attrs({
  alignSelf: 'flex-start'
})`
  overflow: hidden;
  margin-bottom: 2em;
`
const LeftBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Container = styled(Flex)`
  width: 100%;
`
export const Item = ({ min = 270, title, children }) => (
  <Container flexWrap='wrap'>
    <LeftBox pr={10} width={[1,1/3]}>
      { title && <Label alignSelf={['flex-start','flex-end']}><FormattedMessage id={title}/></Label> }
    </LeftBox>
    <Body width={[1,2/3]}>{ children }</Body>
  </Container>
)
