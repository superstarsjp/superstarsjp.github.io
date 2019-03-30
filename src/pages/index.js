import React from 'react'
import en from './en'
import ja from './ja'
import fr from './fr'

const Lang = { en, ja, fr }

export default class Index extends React.Component {
  render() {
    const lang = typeof window !== 'undefined' && window.navigator.language.split('-')[0]
    const LangIndex = Lang[lang] || Lang.en
    return (
      <LangIndex />
    )
  }
}
