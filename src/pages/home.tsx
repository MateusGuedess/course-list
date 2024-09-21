import { Checkbox, Flex, useDisclosure } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import ModalComponent from '../components/molecules/modal/modal.component'
import SearchComponent from '../components/molecules/search/search.component'
import ThemeCardComponent from '../components/molecules/theme-card/theme-card.component'
import useStore from '../store/store'
import { ICourse } from '../types/Course'

function Home() {
    const [search, setSearch] = useState("")
    const [filterByDate, setFilterByDate] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {courses, selected, setSelected} = useStore(state => state)

    const filteredCourses = useMemo(() =>
        courses
    .filter((course: ICourse) => {
        const currentDate = new Date().setHours(0, 0, 0, 0)
        const courseDate = new Date(course.date).setHours(0, 0, 0, 0)
        if (!filterByDate) {
            return course.title.toLowerCase().includes(search.toLowerCase())
        }
        return course.title.toLowerCase().includes(search.toLowerCase()) && courseDate >= currentDate
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), [search, filterByDate, courses])

    function handleSelectedCourse(id: number) {
        setSelected(id)
        onOpen()
    }

  return (
    <>
        {selected.id && <ModalComponent isOpen={isOpen} onClose={onClose} id={selected.id}/>}
        <Flex mt={5} justifyContent="center" alignContent="center">
            <SearchComponent w={300} placeholder="Procure um curso pelo titulo" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
            <Checkbox ml={5} defaultChecked={filterByDate} onChange={() => setFilterByDate(prevState => !prevState)}>Filtrar pela Data</Checkbox>
        </Flex>
        <Flex flexWrap="wrap" justifyContent="center" alignContent="center" gap={7} w="full" h="fit-content" pt={25} pb={25}>
            {
                filteredCourses.map(({id, title, color, tags, date, teacher, description}: ICourse) => (
                    <ThemeCardComponent onClick={() => handleSelectedCourse(id)} key={id} title={title} color={color} tags={tags} date={date} teacher={teacher} description={description}/>
                ))
            }
        </Flex>
    </>
  )
}

export default Home
