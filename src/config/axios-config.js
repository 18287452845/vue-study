// main.js or axios-config.js

import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        const token = localStorage.getItem('satoken');
        if (token) {
            config.headers['content-type'] = 'application/x-www-form-urlencoded';
            config.headers['satoken'] = localStorage.getItem('satoken')
            return config;
        }
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// If you created a dedicated config file (axios-config.js), you would then export axios instance
// export default axios;
export default axios