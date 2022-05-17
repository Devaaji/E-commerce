import Image, { ImageProps } from 'next/image';

const NextImage = ({ alt, quality = '100', ...props }: ImageProps) => (
  <Image
    alt={alt}
    width={'500px'}
    height={'500px'}
    quality={quality}
    {...props}
  />
);

export default NextImage;
