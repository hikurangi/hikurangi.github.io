import React    from 'react'
import { main } from 'react-hyperscript-helpers'

const Layout = ({ children }) => main({ style: { margin: '100px 60px 200px' } }, [children])

export default Layout
