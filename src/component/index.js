import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

export const Link = styled.a.attrs(props => ({
  target: props.target || '_blank'
}))`
`
const Label = styled(Box)`
  overflow: hidden;
  text-decoration: underline;
  text-align: right;
`
const Body = styled(Box).attrs(props => ({
  alignSelf: 'flex-start'
}))`
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
      { title && <Label alignSelf={['flex-start','flex-end']}>{title}</Label> }
    </LeftBox>
    <Body width={[1,2/3]}>{ children }</Body>
  </Container>
)
