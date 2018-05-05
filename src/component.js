import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Grid, Cell } from 'rgx'

export const Emoji = styled.i.attrs({
  className: props => `em em-${props.name}`
})`
  height: 1em;
  margin: 0 0.5em;
`
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const Link = styled.a.attrs({
  target: '_blank',
  children: props => props.children || props.href
})`
`
const Label = styled.span`
  text-decoration: underline;
  text-align: right;
`
const Body = styled.div`
  margin-bottom: 2em;
`
export const Item = ({ min = 270, title, children }) => (
  <Grid gutter={10}>
    <Cell min={min * 1/4}>
      { title && <Right><Label>{title}</Label></Right> }
    </Cell>
    <Cell min={min * 3/4}>
      <Body>{ children }</Body>
    </Cell>
  </Grid>
)
