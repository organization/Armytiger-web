import axios from 'axios';

export const api = axios.create({
	baseURL: '/api',
	xsrfCookieName: 'xsrf-token',
	xsrfHeaderName: 'X-Armytiger-Token',
	validateStatus: status => status >= 500
});
