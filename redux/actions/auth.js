import { 
    LOGIN,
    GET_USERS
 } from '../../config/urls';
import { apiPost,apiGet } from '../../utils/utils';


export function login(data){
    return apiPost(LOGIN, data)
}

export function getusers(){
    return apiGet(GET_USERS)
}

