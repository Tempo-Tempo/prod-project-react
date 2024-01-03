import axios from 'axios';
import { USER_LOCALSTOREAGE_KEY } from 'shared/const/localStoreage';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTOREAGE_KEY) || '',
    },
});
