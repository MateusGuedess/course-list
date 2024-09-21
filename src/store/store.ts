import { create } from 'zustand'

import courses from '../data/courses.json'
import { ICourse } from '../types/Course'

interface StoreActions {
    addCourse: (course: ICourse) => void
    setSelected: (id: number) => void
    updateCourse: (id: number, course: ICourse) => void
    deleteCourse: (id: number) => void
}

export interface StoreState {
    courses: ICourse[]
    selected: {id: number}
}

const useStore = create<StoreState&StoreActions>((set: any) => ({
    courses: [...courses],
    addCourse: (course: ICourse) => set((state: StoreState) => ({ courses: [...state.courses, course] })),
    selected: {id: 0},
    setSelected: (id: number) => set({selected: {id}}),
    updateCourse: (id: number, course: ICourse) => set((state: StoreState) => {
        const index = state.courses.findIndex(course => course.id === id)
        state.courses[index].date = course.date
        state.courses[index].description = course.description
        state.courses[index].teacher = course.teacher
        state.courses[index].title = course.title

        return {courses: state.courses}
    }),
    deleteCourse: (id: number) => set((state: StoreState) => ({courses: state.courses.filter(course => course.id !== id)}))
}))


export default useStore
