'use client'
import {
    Badge,
    Box,
    Button,
    Flex,
    Tag,
    TagLabel,
    Tooltip,
    useColorModeValue
} from '@chakra-ui/react'
import { ICourse } from '../../../types/Course'
import ActionContainer from './theme-card-actions.component'

interface IThemeCardProps extends Omit<ICourse, "id"> {
    onClick: () => void
}

export default function ThemeCardComponent({onClick, title, color, tags, date, teacher}: IThemeCardProps) {

    function isCourseRecent(date: string) {
        const currentDate = new Date().setHours(0, 0, 0, 0)
        const courseDate = new Date(date).setHours(0, 0, 0, 0)
        const expired = currentDate >= courseDate

        return (
        <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.7em" colorScheme={expired ? "red" : "green"}>
              {expired ? "Tempo Esgotado" : "Dentro do Tempo"}
            </Badge>
        </Box>
        )
    }

    return (
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
        position="relative"
        onClick={onClick}
        _hover={{
            transform: "scale(1.05)"
        }}
        transition="transform 0.2s"
        cursor="pointer"
        >

        <Flex h={48} bg={color} rounded="lg" flexDirection="column" justifyContent="space-between" p={2}>
            <Tag mt={2} size='lg' w="fit-content" borderRadius='full' colorScheme={useColorModeValue('gray', 'gray')}>
                <TagLabel fontSize={12} fontWeight={600} color={useColorModeValue('gray', 'gray')}>{date}</TagLabel>
            </Tag>
            <Box>
                <Box mb={-2} fontSize={12} fontWeight={500} color={useColorModeValue('black', 'black')}>
                    Prof. {teacher}
                </Box>
                <Box fontSize={24} fontWeight={500} color={useColorModeValue('black', 'black')}>
                    {title}
                </Box>
            </Box>

            <Flex gap={1}>
                {tags.map((tag, index) =>
                        <Tooltip label={tag} key={`${tag}-${index}`}>
                            <Tag size='sm' w="fit-content" pt={1} pb={1} borderRadius='full'>
                                <TagLabel fontSize={12} fontWeight={600}>{tag}</TagLabel>
                            </Tag>
                        </Tooltip>
                )}
            </Flex>
        </Flex>
        <Box mt={2} justifyContent="space-between">
            {isCourseRecent(date)}
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
  )
}
