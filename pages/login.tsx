import React from 'react';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
  VStack,
  Icon,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
  useBoolean,
  FormErrorMessage,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { NextSeo } from 'next-seo';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { useSWRConfig } from 'swr';

import MainLayout from '../components/layout';
import LayoutImageAuth from '../components/layoutimage';
import useAxios from '../hooks/useAxios';
import useNoAuth from '../hooks/useNoAuth';
import useToastNetworkError from '../hooks/useToastNetworkError';
import useUserStore from '../store/useUserStore';
import { LoginSuccessResponse } from '../ts/types/Authentication';
import { NextPageWithLayout } from '../ts/types/NextPageWithLayout';
import { LoginFormValues } from '../ts/types/schema/authenticationSchema';
import { getServerSidePropsWithNoAuth } from '../utils/getServerSidePropsWithNoAuth';
import { loginSchema } from '../utils/schema/authenticationSchema';

const LoginPage: NextPageWithLayout = () => {
  useNoAuth();
  const { isOpen: isPasswordOpen, onToggle: onPasswordToggle } =
    useDisclosure();

  const router = useRouter();
  const { mutate } = useSWRConfig();
  const showToastNetworkError = useToastNetworkError();

  const [isLoading, setIsLoading] = useBoolean();

  const setLogin = useUserStore((state) => state.setLogin);

  const { register, handleSubmit, formState, setError } =
    useForm<LoginFormValues>({
      resolver: yupResolver(loginSchema),
    });

  const [, makeLogin] = useAxios<LoginSuccessResponse>(
    { url: '/auth/login', method: 'POST' },
    { manual: true }
  );

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    setIsLoading.on();

    makeLogin({ data })
      .then((response) => {
        const { data: responseData } = response.data;

        setLogin(responseData.email, responseData.token);
        mutate(`/auth/me?email=${data.email}`);
        router.push('/');
      })
      .catch((error) => {
        setIsLoading.off();

        if (error.response.status === 404) {
          setError('email', {});
          setError('password', {
            message: 'Yakin itu benar? Coba diingat lagi.',
          });
        } else showToastNetworkError();
      });
  };

  return (
    <React.Fragment>
      <NextSeo title="Login" titleTemplate="%s | E-Commerce" />
      <Flex minH={'80vh'} align={'center'} justify={'center'}>
        <LayoutImageAuth />
        <Stack
          as="form"
          spacing={8}
          mx={'auto'}
          maxW={'lg'}
          py={12}
          px={6}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Box
            w={{ base: 'full', md: '400px' }}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'0px 0px 3px 3px rgba(0, 0, 0, 0.25)'}
            p={8}
          >
            <Stack spacing={4} color={'e-main'}>
              <Box w={'full'} color="e-main" textAlign={'center'}>
                <Text fontSize="22px" fontWeight={'semibold'}>
                  Masuk
                </Text>
              </Box>
              <FormControl id="email" isInvalid={!!formState.errors?.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Mohon masukkan Email Anda"
                  {...register('email')}
                />
                <FormErrorMessage fontSize="xs">
                  {formState.errors?.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isInvalid={!!formState.errors?.password}
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Mohon isi kata sandi Anda"
                    type={isPasswordOpen ? 'text' : 'password'}
                    {...register('password')}
                  />
                  <InputRightElement>
                    <IconButton
                      bg="transparent"
                      _hover={{ bg: 'transparent' }}
                      variant="ghost"
                      aria-label={
                        isPasswordOpen ? 'Mask password' : 'Reveal password'
                      }
                      icon={
                        isPasswordOpen ? (
                          <BsFillEyeFill />
                        ) : (
                          <BsFillEyeSlashFill />
                        )
                      }
                      onClick={onPasswordToggle}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage fontSize="xs">
                  {formState.errors?.password?.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={2}>
                <Button
                  bg={'e-second'}
                  color={'white'}
                  type="submit"
                  isLoading={isLoading}
                  _hover={{
                    bg: 'hover-second',
                  }}
                >
                  Login
                </Button>
                <Box textAlign={'center'}>
                  <Text>
                    Belum punya akun? Silahkan{' '}
                    <NextLink href={'/signup'} passHref>
                      <Link as="a" color={'e-second'} fontWeight="semibold">
                        {''}Daftar
                      </Link>
                    </NextLink>
                  </Text>
                </Box>
                <Box textAlign="center">
                  <Text fontWeight={'semibold'}>Atau</Text>
                </Box>
                <VStack spacing="4">
                  <Button
                    border={'1px'}
                    variant="outline-text"
                    onClick={() => {}}
                    leftIcon={<Icon as={FcGoogle} fontSize="xl" />}
                    isFullWidth
                  >
                    Lanjutkan dengan Google
                  </Button>
                  <NextLink href="/login-facebook" passHref>
                    <Button
                      bg={'#045FE7'}
                      color="white"
                      variant="outline-text"
                      leftIcon={<ImFacebook color="white" />}
                      isFullWidth
                    >
                      Lanjutkan dengan Facebook
                    </Button>
                  </NextLink>
                </VStack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </React.Fragment>
  );
};

LoginPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export const getServerSideProps = getServerSidePropsWithNoAuth;

export default LoginPage;
