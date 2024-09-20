import { create } from 'zustand'

import courses from '../data/courses.json'
import { ICourse } from '../pages/home'



export interface StoreState {
    courses: ICourse[]
    addCourse: (course: ICourse) => void
}

const useStore = create<StoreState>((set: any) => ({
    courses: [...courses],
    addCourse: (course: ICourse) => set((state: StoreState) => ({ courses: [...state.courses, course] })),
}))


export default useStore
