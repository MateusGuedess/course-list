import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tooltip } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import useStore from "../../../store/store"
import { ICourse } from "../../../types/Course"


interface IModal {
    isOpen: boolean
    onClose: () => void
    id: number
}

function ModalComponent({isOpen, onClose, id}: IModal) {
    const [toggleEdit, setToggleEdit] = useState(false)
    const course = useStore((state) => state.courses.find(course => course.id === id))
    const {updateCourse, deleteCourse} = useStore(state => state)
    const {
        handleSubmit,
        register,
    } = useForm();

    useEffect(() => {
        setToggleEdit(false)
    }, [isOpen])

const onSubmit = handleSubmit((data) => {
    const updatedCourse: ICourse = {
        id,
        title: data.title,
        description: data.description,
        teacher: data.teacher,
        date: data.date,
        tags: course?.tags || [],
        color: course?.color || ''
    };
    updateCourse(id, updatedCourse);
    onClose();
})

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <h2>{course?.title}</h2>
    </ModalHeader>
      <ModalCloseButton />
        <form onSubmit={onSubmit}>
            <ModalBody>
                <Input defaultValue={course?.title} variant='flushed' placeholder='Title' {...register('title', {
                    required: 'required',
                    minLength: { value: 3, message: 'Minimum length should be 5' },
                    disabled: !toggleEdit
                })} />
                <Tooltip label={course?.description}>
                    <Input defaultValue={course?.description} variant='flushed' placeholder='Description' {...register('description', {
                        required: 'required',
                        minLength: { value: 3, message: 'Minimum length should be 30' },
                        disabled: !toggleEdit

                    })} />
                </Tooltip>
                <Input defaultValue={course?.teacher} variant='flushed' placeholder='Teacher' {...register('teacher', {
                    required: 'required',
                    minLength: { value: 3, message: 'Minimum length should be 5' },
                    disabled: !toggleEdit
                })} />
                <Input defaultValue={course?.date} variant='flushed' placeholder='Date' {...register('date', {
                    required: 'required',
                    disabled: !toggleEdit
                })} />
        </ModalBody>

        <ModalFooter>
            {toggleEdit ? (
                <Button colorScheme='blue' onClick={onSubmit} mr={3}>
                    Update
                </Button>
                ) : (
                    <Button colorScheme='blue' onClick={() => setToggleEdit(true)} mr={3}>
                        Edit
                    </Button>
                )
            }
            <Button onClick={() => {
                deleteCourse(id)
                onClose()
            }}>Delete</Button>

        </ModalFooter>
      </form>
    </ModalContent>
  </Modal>
  )
}

export default ModalComponent
