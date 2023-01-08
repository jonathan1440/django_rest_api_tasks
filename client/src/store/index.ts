import { defineStore } from 'pinia'
import axios from 'axios'

export const useGlobalStore  = defineStore('globalStore', {
    state: () => ({
        tasks: [],
    }),
    actions: {
        async getTasks() {
        try {
            const response = await axios.get('http://localhost:8000/api/tasks/')
            console.log('response', response.data);
            return response.data
        } catch (error) {
            console.error(error);
        }
        },
        async initialize() {
            const tasks = await this.getTasks()
            this.tasks = JSON.parse(JSON.stringify(tasks))
        },
    }
})