import { Flex } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import ThemeCardComponent from '../components/molecules/theme-card/theme-card.component'
import courses from '../data/courses.json'

interface ICourse {
    id: number
    title: string
    tags: string[]
    color: string
}

function Home() {
    const [search, setSearch] = useState("")

    const filteredCourses = useMemo(() => courses.filter((course: ICourse) => course.title.includes(search)), [search])

  return (
    <>
        <Flex gap={5} w="full" justifyContent="center" h="fit-content" pt={25} pb={25}>
            {
                filteredCourses.map(course => (
                    <ThemeCardComponent />
                ))
            }
        </Flex>
    </>
  )
}

export default Home
