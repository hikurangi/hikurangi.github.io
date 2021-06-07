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
    Link('https://nzmusician.co.nz/features/,get-yer-kit-off-hikurangi-schaverien-kaa/', 'beats the heck out of the drums'),
    ' and ',
    Link('https://github.com/hikurangi', 'writes clean code'),
    '. He\'s mostly based in Wellington, NZ. You can reach him via ',
    Link(`mailto:${email}`, em(email)),
    ' or find him ',
    Link('https://instagram.com/ignarukih', 'on'),
    ' ',
    Link('https://soundcloud.com/ignarukih', 'the'),
    ' ',
    Link('https://www.linkedin.com/in/ignarukih/', 'socials'),
    '.'
  ])

export default Text

const Link = (href, content) => a({
  href,
  target: '_blank',
  rel: 'noopener noreferrer'
}, [content])
