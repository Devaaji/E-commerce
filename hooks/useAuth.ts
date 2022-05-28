import { useEffect } from 'react';

import { useRouter } from 'next/router';

import useUserStore from '../store/useUserStore';
import { UserRole } from '../ts/enum/UserRole';
import useRemoteUserProfile from './remote/useRemoteUserProfile';

const useAuth = (role: keyof typeof UserRole = 'USER') => {
  const router = useRouter();
  const [email, accessToken, id, removeUser] = useUserStore(
    (state) => [
      state.email,
      state.accessToken,
      state.id,
      state.removeUser,
    ]
  );
  const { data, error } = useRemoteUserProfile();

  useEffect(() => {
    if (!email || !accessToken || !id || error) {
      removeUser();
      router.push('/login');
    }

    if (data) {
      if (role === 'ADMIN' && !data.data.isAdmin) router.push('/');
    }
  }, [data, error, email, accessToken, id]);
};

export default useAuth;
