import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import Slider from 'react-slick';

const MainCard = () => {
  const Products = [
    {
      image:
        'https://1.bp.blogspot.com/-3iBG8kFY8bk/X6OAQqZnfnI/AAAAAAAACWA/Nkjt6r0qqaIKjfgWtNfzEbhk2bUnh5FVgCLcBGAsYHQ/s623/Screenshot_4.png',
      title: 'MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC',
      status: 'Ready',
      price: '600.000',
    },
    {
      image:
        'https://1.bp.blogspot.com/-3iBG8kFY8bk/X6OAQqZnfnI/AAAAAAAACWA/Nkjt6r0qqaIKjfgWtNfzEbhk2bUnh5FVgCLcBGAsYHQ/s623/Screenshot_4.png',
      title: 'MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC',
      status: 'Ready',
      price: '600.000',
    },
    {
      image:
        'https://1.bp.blogspot.com/-3iBG8kFY8bk/X6OAQqZnfnI/AAAAAAAACWA/Nkjt6r0qqaIKjfgWtNfzEbhk2bUnh5FVgCLcBGAsYHQ/s623/Screenshot_4.png',
      title: 'MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC',
      status: 'Ready',
      price: '600.000',
    },
    {
      image:
        'https://1.bp.blogspot.com/-3iBG8kFY8bk/X6OAQqZnfnI/AAAAAAAACWA/Nkjt6r0qqaIKjfgWtNfzEbhk2bUnh5FVgCLcBGAsYHQ/s623/Screenshot_4.png',
      title: 'MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC',
      status: 'Ready',
      price: '600.000',
    },
    {
      image:
        'https://1.bp.blogspot.com/-3iBG8kFY8bk/X6OAQqZnfnI/AAAAAAAACWA/Nkjt6r0qqaIKjfgWtNfzEbhk2bUnh5FVgCLcBGAsYHQ/s623/Screenshot_4.png',
      title: 'MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC',
      status: 'Ready',
      price: '600.000',
    },
    {
      image:
        'https://1.bp.blogspot.com/-3iBG8kFY8bk/X6OAQqZnfnI/AAAAAAAACWA/Nkjt6r0qqaIKjfgWtNfzEbhk2bUnh5FVgCLcBGAsYHQ/s623/Screenshot_4.png',
      title: 'MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC',
      status: 'Ready',
      price: '600.000',
    },
    {
      image:
        'https://1.bp.blogspot.com/-3iBG8kFY8bk/X6OAQqZnfnI/AAAAAAAACWA/Nkjt6r0qqaIKjfgWtNfzEbhk2bUnh5FVgCLcBGAsYHQ/s623/Screenshot_4.png',
      title: 'MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC',
      status: 'Ready',
      price: '600.000',
    },
    {
      image:
        'https://1.bp.blogspot.com/-3iBG8kFY8bk/X6OAQqZnfnI/AAAAAAAACWA/Nkjt6r0qqaIKjfgWtNfzEbhk2bUnh5FVgCLcBGAsYHQ/s623/Screenshot_4.png',
      title: 'MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC',
      status: 'Ready',
      price: '600.000',
    },
    {
      image:
        'https://1.bp.blogspot.com/-3iBG8kFY8bk/X6OAQqZnfnI/AAAAAAAACWA/Nkjt6r0qqaIKjfgWtNfzEbhk2bUnh5FVgCLcBGAsYHQ/s623/Screenshot_4.png',
      title: 'MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC',
      status: 'Ready',
      price: '600.000',
    },
    {
      image:
        'https://1.bp.blogspot.com/-3iBG8kFY8bk/X6OAQqZnfnI/AAAAAAAACWA/Nkjt6r0qqaIKjfgWtNfzEbhk2bUnh5FVgCLcBGAsYHQ/s623/Screenshot_4.png',
      title: 'MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC',
      status: 'Ready',
      price: '600.000',
    },
    {
      image:
        'https://1.bp.blogspot.com/-3iBG8kFY8bk/X6OAQqZnfnI/AAAAAAAACWA/Nkjt6r0qqaIKjfgWtNfzEbhk2bUnh5FVgCLcBGAsYHQ/s623/Screenshot_4.png',
      title: 'MSI INVIDIA GeForce RTX 3050 AERO ITX 8GB OC',
      status: 'Ready',
      price: '600.000',
    },
  ];

  // function SampleNextArrow(props: any) {
  //   const { onClick } = props;
  //   return (
  //     <div className="slick-next" style={{ background: "tomato", zIndex: 1, position: "absolute", }}  onClick={onClick}>
  //     <BsChevronRight />
  //   </div>
  //   );
  // }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: 6.5,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.5,
                    arrows: false,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 2,
                    arrows: false,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 2.6,
                    speed: 220,
                    arrows: false,
                    slidesToScroll: 2
                }
            }
        ]
  };
  return (
    <>
      <Slider {...settings}>
        {Products.map((product) => (
          <>
            <Flex
              border={'1px'}
              w={'189px'}
              direction={'column'}
              h={'288px'}
              rounded={'10px'}
              overflow={'hidden'}
            >
              <AspectRatio ratio={4 / 4}>
                <Image
                  src={product.image}
                  alt={product.title}
                  objectFit="cover"
                />
              </AspectRatio>
              <Box p={'8px'}>
                <Box>
                  <Text
                    fontSize={'14px'}
                    fontWeight="bold"
                    textAlign={'center'}
                  >
                    {product.title}{' '}
                  </Text>
                </Box>
                <Box
                  border={'1px'}
                  maxW={'max-content'}
                  px={'2px'}
                  rounded={'5px'}
                  color={'e-second'}
                >
                  <Text fontSize={'8px'}>Ready</Text>
                </Box>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Box fontSize={'14px'}>
                    <Text color={'e-orange'} fontWeight={'semibold'}>
                      Rp.{product.price}
                    </Text>
                  </Box>
                  <Box fontSize={'12px'}>
                    <Text>23 Terjual</Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </>
        ))}
      </Slider>
    </>
  );

};

export default MainCard;
