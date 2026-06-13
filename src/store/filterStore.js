import {create} from 'zustand'

const useFilterStore = create((set)=>({
    selectedLanguage:'All',
    setLanguage: (language)=> set({selectedLanguage:language})
}))

export default useFilterStore