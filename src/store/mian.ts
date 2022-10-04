import { defineStore } from 'pinia'
import {jspangStore} from './jspang'


export const mainStore = defineStore('main', {
    state: () => {
        return {
            helloWorld: 'Hello World',
            count: 0,
            phone: '15139333888'
        }
    },
    getters: {
        // getters是有缓存的，虽然调用多次，但是值一样就不会被多次调用。
        phoneHidden(state){
            console.log('PhoneHidden被调用了');
            
            return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
        }
    },
    actions: {
        changeState() {
            // 在用actions的时候，不能使用箭头函数，因为箭头函数绑定是外部的this。
            this.count++
            this.helloWorld = 'jspang'
        },
        getList(){
            return jspangStore().list
        }
    }
})