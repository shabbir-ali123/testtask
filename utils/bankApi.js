import {apiClient} from './apiClient'
export const getBanks=()=> apiClient.get('/bank/bank_wd');