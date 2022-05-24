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
  VStack,
  Icon,
  InputGroup,
  IconButton,
  InputRightElement,
  useDisclosure,
  useBoolean,
  FormErrorMessage,
  Center,
  Circle,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import MainLayout from '../components/layout';
import { NextSeo } from 'next-seo';
import { yupResolver } from '@hookform/resolvers/yup';
import NextLink from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import {
  BsFillCheckCircleFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from 'react-icons/bs';
import LayoutImageAuth from '../components/layoutimage';
import useNoAuth from '../hooks/useNoAuth';
import { NextPageWithLayout } from '../ts/types/NextPageWithLayout';
import { useForm, SubmitHandler, useFormState } from 'react-hook-form';
import { SignUpFormValues } from '../ts/types/schema/authenticationSchema';
import { signUpSchema } from '../utils/schema/authenticationSchema';
import useAxios from '../hooks/useAxios';
import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi';

const SignUpPage: NextPageWithLayout = () => {
  useNoAuth();
  const toast = useToast();
  const url = `/auth/register`;
  const [isLoading, setIsLoading] = useBoolean();
  const { isOpen: isPasswordOpen, onToggle: onPasswordToggle } =
    useDisclosure();
  const [isRegisterSuccess, setIsRegisterSuccess] = useBoolean();
  const router = useRouter();

  const { register, setError, handleSubmit, control } =
    useForm<SignUpFormValues>({
      resolver: yupResolver(signUpSchema),
    });

  const { errors } = useFormState({ control });

  const [, makeRegister] = useAxios({ url, method: 'POST' }, { manual: true });

  const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    setIsLoading.on();
    makeRegister({ data })
      .then(() => {
        setIsRegisterSuccess.on();
      })
      .catch((error) => {
        setIsLoading.off();
        const errorMessage = error.response.data.data.message;
        if (error) {
          toast({
            title: `${errorMessage}`,
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
        }
      });
  };

  if (!isRegisterSuccess)
    return (
      <MainLayout>
        <NextSeo title="Daftar" titleTemplate="%s | E-Commerce" />
        <Flex minH={'80vh'} align={'center'} justify={'center'}>
          <LayoutImageAuth />
          <Stack
            spacing={8}
            mx={'auto'}
            maxW={'lg'}
            py={12}
            px={6}
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box
              w="400px"
              bg={'white'}
              boxShadow={'0px 0px 3px 3px rgba(0, 0, 0, 0.25)'}
              p={8}
            >
              <Stack spacing={4} color={'e-main'}>
                <Box w={'full'} color="e-main" textAlign={'center'}>
                  <Text fontSize="22px" fontWeight={'semibold'}>
                    Daftar Sekarang
                  </Text>
                  <Text>
                    Saya sudah punya akun?{' '}
                    <NextLink href={'/login'} passHref>
                      <Link as="a" color={'e-second'} fontWeight="semibold">
                        Masuk
                      </Link>
                    </NextLink>
                  </Text>
                </Box>
                <FormControl id="username" isInvalid={!!errors.username}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
                    placeholder="Username"
                    {...register('username')}
                  />
                  <FormErrorMessage fontSize="xs">
                    {errors.username?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="email" isInvalid={!!errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    {...register('email')}
                    placeholder="email address"
                  />
                  <FormErrorMessage fontSize="xs">
                    {errors.email?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl id="password" isInvalid={!!errors.password}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="enter password"
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
                    {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>
                <Stack spacing={2}>
                  <Button
                    bg={'e-main'}
                    color={'white'}
                    type="submit"
                    _hover={{
                      bg: 'e-second',
                    }}
                    disabled={isLoading}
                    isLoading={isLoading}
                  >
                    Daftar
                  </Button>
                  <Box textAlign="center">
                    <Text fontWeight={'semibold'}>Atau</Text>
                  </Box>
                  <VStack spacing="4">
                    <NextLink href="/login-google" passHref>
                      <Button
                        border={'1px'}
                        variant="outline-text"
                        leftIcon={<Icon as={FcGoogle} fontSize="xl" />}
                        isFullWidth
                      >
                        Lanjutkan dengan Google
                      </Button>
                    </NextLink>
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
      </MainLayout>
    );

  return (
    <>
      <MainLayout>
        <NextSeo title="Akun" titleTemplate="%s | Selamat Telah Terdaftar!" />
        <Flex minH={'80vh'} align={'center'} justify={'center'}>
          <LayoutImageAuth />
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Box
              w="400px"
              bg={'white'}
              boxShadow={'0px 0px 3px 3px rgba(0, 0, 0, 0.25)'}
              p={8}
            >
              <Stack spacing={4} color={'e-main'}>
                <Center>
                  <Circle mt={10} size="50px" bg="green" color="white">
                    <BsFillCheckCircleFill size={40} />
                  </Circle>
                </Center>
                <Text
                  m={5}
                  align="center"
                  fontWeight="bold"
                  fontFamily="heading"
                >
                  Akun Telah Terdaftar!
                </Text>
                <Center>
                  <Text
                    mb={5}
                    w="80%"
                    align="center"
                    size="subtitle-small"
                    fontFamily="body"
                  >
                    Akun yang tersebut telah terdaftar, masuk untuk Belanja di
                    E-Commerce Depdep
                  </Text>
                </Center>
                <Center mb={'10'}>
                  <NextLink href="/login">
                    <Button
                      bg="e-second"
                      color="white"
                      variant="solid-gradient"
                      w="100%"
                      mt={20}
                      type="submit"
                    >
                      Masuk
                    </Button>
                  </NextLink>
                </Center>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </MainLayout>
    </>
  );
};

SignUpPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default SignUpPage;
