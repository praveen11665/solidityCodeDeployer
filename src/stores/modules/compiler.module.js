import { defineStore } from 'pinia'
import Service from '@/services/Service'

const initialState = () => ({})
export const useCompilerStore = defineStore('compiler', {
  namespaced: true,
  state: initialState,
  actions: {
    async fetchCode(question) {
        return Service.get('compile?code=' + question).then(
        (response) => {
            return response
        })
    }
  },
})
