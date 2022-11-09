import { Box, Flex, Link } from '@chakra-ui/react';

export default function Menu() {
  return(
    <>
      <Box bg="cinza.900" w="100%" h="80px" display="flex" justifyContent="space-between" alignItems="center">
        <Flex ml="3%" color="verde.300">MM Dev</Flex>
        <Flex mr="3%" gap="20px">
          <Link color="verde.300">About</Link>
          <Link color="verde.300">Works</Link>
          <Link color="verde.300">Skills</Link>
          <Link color="verde.300">Contact</Link>
        </Flex>
      </Box>
    </>
  )
  
}