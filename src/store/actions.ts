import axios from 'axios';
import checkResponse from '@/utils/checkResponse';

const loadClients = async ({commit}: any, payload: any) => {
    //commit('SET_LOADING', true);

    try {
        const response = await axios.get('clients');
        const checkErrors = checkResponse(response);

        if (checkErrors) {
            //commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            //commit('SET_CLIENTS', response);
        }
    } catch (e) {
        //commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        //commit('SET_LOADING', false);
    }
};

export default {
};
