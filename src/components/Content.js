import React        from 'react'
import { p, em, a } from 'react-hyperscript-helpers'

const email  = 'h@hikurangi.co'
const styles = {
  mainText: {
    fontSize: '48px'
  },
  link: {
    fontStyle: 'normal'
  }
}

const Text = () =>
  p({ style: styles.mainText }, [
    'Hikurangi Schaverien-Kaa is mostly based in Wellington. He writes code and beats the hell out of the drums. You can reach him via',
    ' ',
    a({ href: `mailto:${email}` }, [em(email)]),
    ' ',
    'or find him',
    ' ',
    a({ href: 'https://instagram.com/ignarukih' }, ['on']),
    ' ',
    a({ href: 'https://soundcloud.com/ignarukih' }, ['the']),
    ' ',
    a({ href: 'https://www.linkedin.com/in/ignarukih/' }, ['socials']),
    '.'
  ])

export default Text
