import React from 'react';

import {
  Avatar,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  FiHeart,
  FiLogOut,
  FiSettings,
  FiTruck,
  FiUsers,
} from 'react-icons/fi';
import { useSWRConfig } from 'swr';

import useRemoteUserProfile from '../../../hooks/remote/useRemoteUserProfile';
import useUserStore from '../../../store/useUserStore';

const MainNavbarUserButton = () => {
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const { data: userProfileData } = useRemoteUserProfile();

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
    <Menu placement="bottom-end" isLazy>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        bg="transparent"
        variant="ghost"
      >
        <Avatar src="" name={userProfileData?.data.name} w="10" h="10" />
      </MenuButton>
      <Portal>
        <MenuList borderColor="vocasia-neutral-8" color="black">
          <HStack m="3">
            <Avatar src="" name={userProfileData?.data.name} w="10" h="10" />
            <VStack alignItems="left">
              <HStack>
                <Text
                  fontSize="md"
                  fontStyle="heading"
                  color="black"
                  fontWeight="bold"
                >
                  Hai,
                </Text>
                <Text
                  size="title-small"
                  fontStyle="heading"
                  color="black"
                  fontWeight="bold"
                >
                  {userProfileData?.data.name}
                </Text>
              </HStack>
              <Text color="gray.600" fontSize="sm" fontStyle="heading">
                {userProfileData?.data.email}
              </Text>
            </VStack>
          </HStack>
          <NextLink href="/profile" passHref>
            <MenuItem as="a" icon={<FiUsers />}>
              Profil Pengguna
            </MenuItem>
          </NextLink>
          <NextLink href="/my-wishlist" passHref>
            <MenuItem as="a" icon={<FiHeart />}>
              My Wishlist
            </MenuItem>
          </NextLink>
          <NextLink href="/hitory-pay" passHref>
            <MenuItem as="a" icon={<FiTruck />}>
              Pembelian
            </MenuItem>
          </NextLink>
          <NextLink href="/messages" passHref>
            <MenuItem as="a" icon={<FiSettings />}>
              Pengaturan
            </MenuItem>
          </NextLink>
          <MenuItem
            py="4"
            bg="gray.100"
            color="green.400"
            icon={<FiLogOut color="green" />}
            onClick={onLogout}
          >
            Keluar
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default MainNavbarUserButton;
