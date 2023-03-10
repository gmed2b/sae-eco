import {
  Box,
  Heading,
  Flex,
  HStack,
  Button,
  Text,
  Card,
  Badge,
  Img
} from '@chakra-ui/react'

const NewProduct = props => {
  const { product } = props

  return (
    <Card p={5}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        gap={5}
      >
        <Box>
          <Heading as={'h3'} size={'sm'} mb={10} color={'gray.500'}>
            NOUVEAUTES
          </Heading>
          <Heading as={'h1'} size={'2xl'}>
            {product.title}
          </Heading>
          <Text fontSize={'xl'} mb={2} color={'gray.500'}>
            {product.brand}
          </Text>
          <Text fontSize={'sm'}>{product.description}</Text>
          <HStack mt={10}>
            <Button bgColor={'fireRed'} color={'white'}>
              Voir plus
            </Button>
            <Button borderColor={'fireRed'} color={'fireRed'} variant="outline">
              Ajouter au panier
            </Button>
          </HStack>
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Box position={'relative'}>
            <Img src={'/images/jogger.webp'} h={'300px'} />
            <Badge
              position={'absolute'}
              top={2}
              left={2}
              colorScheme="green"
              fontSize={'1rem'}
            >
              NEW
            </Badge>
          </Box>
        </Box>
      </Flex>
    </Card>
  )
}

export default NewProduct
