import Vue from 'vue';

const SET_BEERS = (state: any, payload: any) => {
    state.beers = payload;
};

const SET_LOADING = (state: any, payload: any) => {
    state.isLoading = payload;
};

export default {
    SET_BEERS,
    SET_LOADING
};