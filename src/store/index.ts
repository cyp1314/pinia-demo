import { jspangStore } from "./jspang";
import { mainStore } from "./mian";
import useUserStore from "./user";



export default function useStore() {
    return {
        user: useUserStore(),
        main: mainStore(),
        jspang: jspangStore()
    };
}