import { Button, Drawer as ChakraDrawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, Textarea } from "@chakra-ui/react";
import { FocusableElement } from "@chakra-ui/utils";
import React from "react";
import { useForm } from "react-hook-form";
import useStore from "../../../store/store";
import { ICourse } from "../../../types/Course";

export default function Drawer({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) {
    const firstField = React.useRef<FocusableElement>(null)

    const {
        handleSubmit,
        register,
    } = useForm();
    const { addCourse } = useStore(state => state)

    const formatDate = (date: string): string => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
      }

    const onSubmit = handleSubmit((data) => {
        const addCourseStructure: ICourse = {
            id: Math.random(),
            title: data.title,
            description: data.description,
            teacher: data.teacher,
            date: formatDate(data.date),
            tags: data.tags || [],
            color: data?.color || 'red'
        };
        addCourse(addCourseStructure);
        onClose();
    })


    return (
      <>
        <ChakraDrawer
            size="md"
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Create a new course
            </DrawerHeader>
            <form>
                <DrawerBody>
                    <Flex direction="column" gap={5}>
                        <Input variant='flushed' placeholder='Title' {...register('title', {
                            required: 'required',
                            minLength: { value: 3, message: 'Minimum length should be 5' }
                        })} />
                        <Textarea variant='flushed' placeholder='Here is a sample placeholder' {...register('description', {
                            required: 'required',
                            minLength: { value: 3, message: 'Minimum length should be 30' },
                        })} />
                        <Input variant='flushed' placeholder='Teacher' {...register('teacher', {
                            required: 'required',
                            minLength: { value: 3, message: 'Minimum length should be 5' },
                        })} />
                        <Input type='date' variant='flushed' placeholder='Date' {...register('date', {
                            required: 'required',
                        })} />
                    </Flex>
                </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={onSubmit} colorScheme='blue'>Submit</Button>
                </DrawerFooter>
            </form>

          </DrawerContent>
        </ChakraDrawer>
      </>
    )
  }
