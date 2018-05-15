import axios from 'axios';

export const FetchData = search_word => axios.post("/api", {search_word}).then(res => res.data);
