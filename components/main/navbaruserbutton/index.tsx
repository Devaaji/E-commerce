import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useSWRConfig } from 'swr';
import useUserStore from '../../../store/useUserStore';

const MainNavbarUserButton = () => {
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const [userEmail, removeUserStore] = useUserStore((state) => [
    state.email,
    state.removeUser,
  ]);

  const onLogout = () => {
    removeUserStore();
    mutate(`/auth/${userEmail}`);
    router.push('/login');

  };

  return (
    <Button
      variant={'ghost'}
      color="e-second"
      border={'1px'}
      borderColor={'e-second'}
      onClick={onLogout}
    >
      Logout
    </Button>
  );
};

export default MainNavbarUserButton;
