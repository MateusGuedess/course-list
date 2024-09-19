import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

function SearchComponent({...props}) {
  return (
    <InputGroup w="auto">
        <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.500' />
        </InputLeftElement>
        <Input {...props} />
  </InputGroup>
  )
}

export default SearchComponent
