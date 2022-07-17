import { AxiosInstance } from 'axios';
import VueRouter from 'vue-router';

declare module 'vue/types/vue' {
    interface Vue {
        router: VueRouter;
        axios: AxiosInstance;
    }

    interface VueConstructor<V extends Vue = Vue> {
        router: VueRouter;
        axios: AxiosInstance;
    }
}