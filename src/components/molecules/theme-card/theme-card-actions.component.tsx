import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

export default function ActionContainer() {
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
