import React from 'react'
import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../Pages/HomePage';

interface props {
  gamequery: GameQuery
}

const HeadingFilter = ({gamequery}: props) => {
  const heading= `${gamequery.platform?.name ||''} ${gamequery.genre?.name || ''} Games`;
  return(
    <Heading as={'h1'} marginY={3}>{heading}</Heading>
  )
  
}

export default HeadingFilter