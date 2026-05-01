import { fetchUtils } from 'react-admin';
import simpleRestProvider from "ra-data-simple-rest";

const httpClient = (url: string, options: RequestInit = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const headers = options.headers as Headers;
    const token = localStorage.getItem('token') || null;
    headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(
  import.meta.env.VITE_SIMPLE_REST_URL, httpClient
);
