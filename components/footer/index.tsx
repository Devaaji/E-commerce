import React from 'react';

import { Box, Container, Flex, Text, VStack, Wrap } from '@chakra-ui/react';
import { MdLanguage, MdCalendarToday, MdCall, MdEmail } from 'react-icons/md';

const MainFooter = () => {
  return (
    <Box
      bg={'white'}
      boxShadow={'0px 4px 4px 6px rgba(0, 0, 0, 0.25)'}
      mt="50px"
      py="30px"
    >
      <Container maxW={'8xl'}>
        <Wrap spacing={12}>
          <Box>
            <Box>
              <Text fontSize={'18px'} fontWeight={'semibold'}>
                Bantuan
              </Text>
              <Box w={'280px'}>
                <VStack mt={'17px'} spacing={4} textAlign={'start'}>
                  <Box w={'full'}>Cara Belanja</Box>
                  <Box w={'full'}>Cara Pengiriman</Box>
                  <Text w={'full'}>Pengiriman</Text>
                  <Text w={'full'}>Pengembalian Produk</Text>
                  <Text w={'full'}>Hubungi Kami</Text>
                </VStack>
              </Box>
              <Box fontSize={'18px'} mt="20px" fontWeight={'semibold'}>
                Metode Pengiriman
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <Text fontSize={'18px'} fontWeight={'semibold'}>
                Costumer Care
              </Text>
              <Box w={'320px'}>
                <VStack mt={'17px'} spacing={4} textAlign={'start'}>
                  <Box w={'full'}>
                    Klaim dan Garansi Produk, Silahkan hubungi:
                  </Box>
                  <Flex w={'full'} alignItems={'center'}>
                    {' '}
                    <MdLanguage /> <Text ml="4px">Depdep Website</Text>
                  </Flex>
                  <Flex w={'full'} alignItems={'center'}>
                    {' '}
                    <MdCalendarToday />{' '}
                    <Text ml="4px">Buka Senin - Sabtu, 10:00 - 18:00 WIB</Text>
                  </Flex>
                  <Flex w={'full'} alignItems={'center'}>
                    {' '}
                    <MdCall /> <Text ml="4px">08979111476</Text>
                  </Flex>
                  <Flex w={'full'} alignItems={'center'}>
                    {' '}
                    <MdEmail /> <Text ml="4px">Devaaji5@gmail.com</Text>
                  </Flex>
                </VStack>
              </Box>
              <Box fontSize={'18px'} mt="20px" fontWeight={'semibold'}>
                Metode Pembayaran
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <Text fontSize={'18px'} fontWeight={'semibold'}>
                Tentang Saya
              </Text>
              <Box w={'280px'}>
                <VStack mt={'17px'} spacing={4} textAlign={'start'}>
                  <Box w={'full'}>Tentang Saya</Box>
                  <Box w={'full'}>Website Saya</Box>
                  <Text w={'full'}>Kebiajakan Provasi</Text>
                  <Text w={'full'}>{''}</Text>
                  <Text w={'full'}>{''}</Text>
                  <Text w={'full'}>{''}</Text>
                  <Text w={'full'}>{''}</Text>
                  <Text w={'full'}>{''}</Text>
                </VStack>
              </Box>
              <Box fontSize={'18px'} mt="20px" fontWeight={'semibold'}>
                Social Media
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <Text fontSize={'18px'} fontWeight={'semibold'}>
                Toko Kami
              </Text>
              <Box w={'320px'}>
                <VStack mt={'17px'} spacing={4} textAlign={'start'}>
                  <Box w={'full'}>
                    Klaim dan Garansi Produk, Silahkan hubungi:
                  </Box>
                  <Flex w={'full'} alignItems={'center'}>
                    {' '}
                    <MdLanguage /> <Text ml="4px">Depdep Website</Text>
                  </Flex>
                  <Flex w={'full'} alignItems={'center'}>
                    {' '}
                    <MdCalendarToday />{' '}
                    <Text ml="4px">Buka Senin - Sabtu, 10:00 - 18:00 WIB</Text>
                  </Flex>
                  <Flex w={'full'} alignItems={'center'}>
                    {' '}
                    <MdCall /> <Text ml="4px">08979111476</Text>
                  </Flex>
                  <Flex w={'full'} alignItems={'center'}>
                    {' '}
                    <MdEmail /> <Text ml="4px">Devaaji5@gmail.com</Text>
                  </Flex>
                </VStack>
              </Box>
              <Box fontSize={'18px'} mt="20px" fontWeight={'semibold'}>
                Unduh Aplikasi
              </Box>
            </Box>
          </Box>
        </Wrap>
      </Container>
      <Box borderTop="1px" mt="20px" pt="20px" textAlign={'center'}>
        <Text>&copy; 2022 Deva Aji Saputra. All Rights Reserved</Text>
      </Box>
    </Box>
  );
};

export default MainFooter;
