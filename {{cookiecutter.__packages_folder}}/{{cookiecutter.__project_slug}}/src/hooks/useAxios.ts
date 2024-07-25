import { useEffect } from 'react';
import axios from '@api/axios';
import { SessionInfo } from '@custom_types/lib/session_storage/session.interface';
import { getSession } from '@lib/session_storage';

const useAxios = () => {
  const sessionInfo: SessionInfo | null = getSession();

  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
      (config) => {
        if (sessionInfo) {
          config.headers['Authorization'] = 'Bearer ' + sessionInfo.token;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    return () => {
      axios.interceptors.request.eject(requestIntercept);
    };
  }, []);

  return axios;
};

export default useAxios;
