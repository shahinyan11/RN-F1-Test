import axios from 'axios';
import {BASE_URL} from '../constants';
import {GetDriversParams} from './dataTypes';

export function getDrivers(params: GetDriversParams) {
  return axios.get(`${BASE_URL}/drivers.json`, {params});
}

export function getDriverRaces(driverId: string) {
  return axios.get(`${BASE_URL}/drivers/${driverId}/races.json`);
}
