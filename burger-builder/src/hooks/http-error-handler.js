import {useState, useEffect} from 'react';

export default httpClient =>{

    const [error, setError] = useState(null);

        
    const reqInterceptor = httpClient.interceptors.request.use(req => {
        setError(null);
        return req;
    })
    const resInterceptor = httpClient.interceptors.response.use(res => res, err => {
        setError(err);
    });


useEffect(()=> { // at the time of mount the main function will run (if dependency array is empty)
                 // and at the time of unmount the clean up function will get exectuted
    return ()=>{    //clean up funtion when dependencies change
        httpClient.interceptors.request.eject(reqInterceptor);
        httpClient.interceptors.response.eject(resInterceptor);
    }
},[reqInterceptor, resInterceptor,  httpClient]);

const errorConfirmedHandler = () => {
    setError(null);
}

    return [error,errorConfirmedHandler];
}
