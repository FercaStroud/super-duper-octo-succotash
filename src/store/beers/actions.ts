import axios from 'axios';
import checkResponse from '@/utils/checkResponse';

const loadBeers = async ({ commit }: any, payload: any) => {
    commit('SET_LOADING', true);

    let getStrings = function() {
        let params = '?per_page=25';
        Object.entries(payload).forEach(entry => {
            const [key, value] = entry;
            if(value !== 0 && value !== ''){
                params += '&' + key + '=' + value;
            }
        });

        return params;
    };

    try {
        //MAX 325 Records - 13 pages - 25 by default
        const response = await axios.get('/beers' + getStrings());
        const checkErrors = checkResponse(response);

        if (checkErrors) {
            //commit('SET_DIALOG_MESSAGE', checkErrors.message);
        } else {
            commit('SET_BEERS', response.data);
        }
    } catch (e) {
        //commit('SET_DIALOG_MESSAGE', 'errors.generic_error');
    } finally {
        commit('SET_LOADING', false);
    }
};

export default {
    loadBeers
};
