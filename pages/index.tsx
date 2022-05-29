import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import MainBannerCarousel from '../components/bannercarousel';
import MainLayout from '../components/layout';
import MainRecomendation from '../components/MainRecomendation';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Toko Komputer "
        titleTemplate="%s | Depdep"
        description="Situs Jual Beli cepat Online Toko Kompuer"
        additionalMetaTags={[
          {
            property: 'keywords',
            content:
              'komputer, harga, Jual, beli, depdep, devaaji, Toko Komputer Terbaik',
          },
        ]}
      />
      <MainLayout>
        <MainBannerCarousel />
        <MainRecomendation />
      </MainLayout>
    </>
  );
};

export default Home;
