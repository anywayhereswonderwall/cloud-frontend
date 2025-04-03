import axios from 'axios';
import { env } from '$env/dynamic/public';

const api = axios.create({
	baseURL: env.PUBLIC_API_BASE_URL
	// baseURL: '/api'
});

export default api;
