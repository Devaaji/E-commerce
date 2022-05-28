import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useRemoteUserProfile from './remote/useRemoteUserProfile';

const useNoAuth = () => {
  const router = useRouter();
  const { data } = useRemoteUserProfile();

  useEffect(() => {
    if (data) router.replace('/');
  }, [data]);
};

export default useNoAuth;
