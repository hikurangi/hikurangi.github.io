import React        from 'react'
import { p, em, a } from 'react-hyperscript-helpers'

const email  = 'hikurangi@gmail.com'
const styles = {
  mainText: {
    fontSize: '48px'
  }
}

const Text = () =>
  p({ style: styles.mainText }, [
    'Hikurangi Schaverien-Kaa ',
    makeLink('https://nzmusician.co.nz/features/,get-yer-kit-off-hikurangi-schaverien-kaa/', 'beats the heck out of the drums'),
    ' and ',
    makeLink('https://github.com/hikurangi', 'writes clean code'),
    ' . He\'s mostly based in Wellington, NZ. You can reach him via ',
    makeLink(`mailto:${email}`, em(email)),
    ' or find him ',
    makeLink('https://instagram.com/ignarukih', 'on'),
    ' ',
    makeLink('https://soundcloud.com/ignarukih', 'the'),
    ' ',
    makeLink('https://www.linkedin.com/in/ignarukih/', 'socials'),
    '.'
  ])

export default Text

function makeLink (href, content) { return a({
  href,
  target: '_blank',
  rel: 'noopener noreferrer'
}, [content]) }
