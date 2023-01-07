import NextLink from 'next/link'
import { Link, useColorModeValue } from '@chakra-ui/react'

const NavLinkItem = ({ href, path, children, footer }) => {
  const active = path === href
  return (
    <NextLink href={href}>
      <Link
        py={1}
        px={2}
        color={footer ? 'gray.50' : useColorModeValue('gray.700', 'gray.50')}
        textDecoration={active ? 'underline' : 'none'}
        textTransform={footer ? 'initial' : 'uppercase'}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default NavLinkItem
