import { Box, Flex } from '@chakra-ui/react'
import NavBarComponent from './components/molecules/navbar/navbar.component'
import ThemeCardComponent from './components/molecules/theme-card/theme-card.component'

function App() {

  return (
    <>
        <NavBarComponent />
        <Flex>
            <Box flex='1' bg='tomato'>
                {/* <Text>Box 3</Text> */}
                <ThemeCardComponent />
            </Box>
        </Flex>
    </>
  )
}

export default App
