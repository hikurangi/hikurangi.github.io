import * as React from 'react'

const email = 'hikurangi@gmail.com'

const styles = {
  mainText: {
    fontSize: '48px'
  }
}

const Text = () => (
  <p style={styles.mainText} children={[
    "Hikurangi Schaverien-Kaa ",
    <Link href="https://nzmusician.co.nz/features/get-yer-kit-off-hikurangi-schaverien-kaa/" >beats the heck out of the drums</Link >,
    " and ",
    <Link href="https://github.com/hikurangi">writes clean code</Link>,
    ". He\'s mostly based in Wellington, Aotearoa (NZ). You can reach him via ",
    <Link href={`mailto:${email}`}><em>{email}</em></Link>,
    " or find him ",
    <Link href="https://instagram.com/ignarukih">on</Link>,
    " ",
    <Link href="https://soundcloud.com/ignarukih">the</Link>,
    " ",
    <Link href="https://www.linkedin.com/in/ignarukih/">socials</Link>,
    "."
  ]} />
)
export default Text

type LinkChildren = string | React.ReactElement

interface LinkProps {
  href: string
  children: LinkChildren
}

const Link = (props: LinkProps) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
