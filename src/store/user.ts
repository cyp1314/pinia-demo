import { defineStore } from 'pinia'

export default defineStore('user', {
    state() {
        return {
            userList: [] as IUser[]
        }
    },
    actions: {
        getLists() {
            let resList: IUser[] = [
                { name: "张三", age: 18 },
                { name: "李四", age: 19 },
            ]
            this.userList = resList
        }
    }
})