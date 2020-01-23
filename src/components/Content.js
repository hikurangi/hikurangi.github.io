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
    'Hikurangi Schaverien-Kaa',
    ' ',
    makeLink('https://github.com/hikurangi', 'writes clean code'),
    ' ',
    'and',
    ' ',
    makeLink('https://nzmusician.co.nz/features/,get-yer-kit-off-hikurangi-schaverien-kaa/', 'beats the heck out of the drums'),
    '. He\'s mostly based in Wellington. You can reach him via',
    ' ',
    a({ href: `mailto:${email}` }, [em(email)]),
    ' ',
    'or find him',
    ' ',
    makeLink('https://instagram.com/ignarukih', 'on'),
    ' ',
    makeLink('https://soundcloud.com/ignarukih', 'the'),
    ' ',
    makeLink('https://www.linkedin.com/in/ignarukih/', 'socials'),
    '.'
  ])

export default Text

function makeLink (href, content) { return a({ href }, [content]) }