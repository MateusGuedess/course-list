'use client'
import {
    Badge,
    Box,
    Button,
    Flex,
    Tag,
    TagLabel,
    useColorModeValue
} from '@chakra-ui/react'

function ActionContainer() {
  return (
    <Box display="flex" alignItems="center">
      <Flex direction="column" as="span" ml="2" color="gray.600" fontSize="sm">
        <Box color={useColorModeValue('gray', 'white')} fontWeight={700} fontSize={12}>
            $250
        </Box>
        <Box fontSize="xs" color={useColorModeValue('gray', 'white')}>São Francisco, SA</Box>
      </Flex>
    </Box>
  )
}

export default function ThemeCardComponent() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        w={220}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        justifyContent="space-between"
        flexDirection="column"
        h={280}
        p={2}
        position="relative">

        <Flex h={48} bg={"#e3dbfa"} rounded="lg" flexDirection="column" justifyContent="space-between" p={2}>
            <Tag mt={2} size='lg' w="fit-content" borderRadius='full' colorScheme={useColorModeValue('gray', 'gray')}>
                <TagLabel fontSize={12} fontWeight={600} color={useColorModeValue('gray', 'gray')}>18/09/2024</TagLabel>
            </Tag>
            <Box>
                <Box mb={-2} fontSize={12} fontWeight={500} color={useColorModeValue('black', 'black')}>
                    Prof. Eleonor
                </Box>
                <Box fontSize={24} fontWeight={500} color={useColorModeValue('black', 'black')}>
                    Ruby on Rails
                </Box>
            </Box>

            <Flex gap={1}>
                <Tag size='sm' w="fit-content" pt={1} pb={1} borderRadius='full'>
                    <TagLabel fontSize={12} fontWeight={600}>Docker</TagLabel>
                </Tag>
                <Tag size='sm' w="fit-content" pt={1} pb={1} borderRadius='full'>
                    <TagLabel fontSize={12} fontWeight={600}>Server</TagLabel>
                </Tag>
                <Tag size='sm' w="fit-content" pt={1} pb={1} borderRadius='full'>
                    <TagLabel fontSize={12} fontWeight={600}>SQL</TagLabel>
                </Tag>
            </Flex>
        </Flex>
        <Box mt={2} justifyContent="space-between">
          <Box display="flex" alignItems="baseline">
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                New
              </Badge>
          </Box>
          <Flex justifyContent="space-between" alignContent="center" w="100%" alignItems="end">
            <ActionContainer />
            <Button
                fontSize={'sm'}
                rounded={'full'}
                bg={useColorModeValue('black', 'white')}
                color={useColorModeValue('white', 'black')}
                _hover={{ bg: 'lightgray.500' }}
                _focus={{ bg: 'lightgray.500' }}
                 w={20}
                 h={8}
             >
                Enter
          </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}
