import { Checkbox, Flex, useDisclosure } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import ModalComponent from '../components/molecules/modal/modal.component'
import SearchComponent from '../components/molecules/search/search.component'
import ThemeCardComponent from '../components/molecules/theme-card/theme-card.component'
import courses from '../data/courses.json'

export interface ICourse {
    id: number
    title: string
    tags: string[]
    color: string
    date: string
    teacher: string
    onOpen?: () => void
}

function Home() {
    const [search, setSearch] = useState("")
    const [filterByDate, setFilterByDate] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const filteredCourses = useMemo(() =>
        courses
    .filter((course: ICourse) => {
        const currentDate = new Date().setHours(0, 0, 0, 0)
        const courseDate = new Date(course.date).setHours(0, 0, 0, 0)
        if (!filterByDate) {
            return course.title.toLowerCase().includes(search.toLowerCase())
        }
        return course.title.toLowerCase().includes(search.toLowerCase()) && courseDate >= currentDate
    }), [search, filterByDate])

  return (
    <>
        <ModalComponent isOpen={isOpen} onClose={onClose} />
        <Flex mt={5} justifyContent="center" alignContent="center">
            <SearchComponent w={250} placeholder="Search for a course" onChange={(e) => setSearch(e.target.value)} />
            <Checkbox ml={5} defaultChecked={filterByDate} onChange={(e) => setFilterByDate(prevState => !prevState)}>Filtrar pela Data</Checkbox>
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center" alignContent="center" gap={7} w="full" h="fit-content" pt={25} pb={25}>
            {
                filteredCourses.map(({id, title, color, tags, date, teacher}: ICourse) => (
                    <ThemeCardComponent onOpen={onOpen} key={id} title={title} color={color} tags={tags} date={date} teacher={teacher}/>
                ))
            }
        </Flex>
    </>
  )
}

export default Home
