import { create } from 'apisauce';

const baseURL = 'http://127.0.0.1:8081'

export const API = create({
    baseURL,
    withCredentials: true,
})

function methodLog(response) {
    const isSuccess = response.ok;
    switch (response.config.method?.toLocaleUpperCase()) {
        case 'GET':
            console.log(
                `${isSuccess ? '😊' : '😡'} %c${response.config?.method?.toLocaleUpperCase()} `,
                'background: #191919; color: #14C38E',
                response.status,
                response.config?.url,
                '\n',
                {
                    data: response.data,
                    headers: response.headers
                }
            )
    }
}

API.addMonitor((response) => {
    if (process.env.NODE_ENV === 'development') methodLog(response);
})