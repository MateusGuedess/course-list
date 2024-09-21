import { create } from 'zustand'

import courses from '../data/courses.json'
import { ICourse } from '../types/Course'



export interface StoreState {
    courses: ICourse[]
    addCourse: (course: ICourse) => void
    selected: {id: number}
    setSelected: (id: number) => void
    updateCourse: (id: number, course: ICourse) => void
}

const useStore = create<StoreState>((set: any) => ({
    courses: [...courses],
    addCourse: (course: ICourse) => set((state: StoreState) => ({ courses: [...state.courses, course] })),
    selected: {id: 0},
    setSelected: (id: number) => set({selected: {id}}),
    updateCourse: (id: number, course: ICourse) => set((state: StoreState) => {
        const index = state.courses.findIndex(course => course.id === id)
        state.courses[index] = course
        return {courses: state.courses}
    })
}))


export default useStore
