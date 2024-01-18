import { Heading } from '@chakra-ui/react'
import getGame from '../store';



const HeadingFilter = () => {
  const genre= getGame(s=>s.gameQuery.genre)
  const platform = getGame(s=>s.gameQuery.platform)
  const heading= `${platform?.name ||''} ${genre?.name || ''} Games`;
  return(
    <Heading as={'h1'} marginY={3}>{heading}</Heading>
  )
  
}

export default HeadingFilter