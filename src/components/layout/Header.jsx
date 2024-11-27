"use client";

import { Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <header>
      <Container className='flex justify-between items-center'>
        <Heading as="h1">logo</Heading>
        <nav>nav</nav>
      </Container>
    </header>
  )
}

export default Header