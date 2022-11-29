import axios from 'axios';
import {BASE_URL} from '../constants';

export function getDrivers(params: any) {
  return axios.get(`${BASE_URL}/drivers.json`, {params});
}
