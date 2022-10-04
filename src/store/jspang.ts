import { defineStore } from "pinia";

export const jspangStore = defineStore('jspang',{
    state() {
        return {
            list:['小红','小美','胖丫']
        }
    },
})