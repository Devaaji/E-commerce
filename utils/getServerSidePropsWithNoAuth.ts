import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

export const getServerSidePropsWithNoAuth = async (
  context: GetServerSidePropsContext
) => {
  const {
    _em: email,
    _t: accessToken,
    _id: userId,
  } = parseCookies(context, { path: '/' });

  if (email && accessToken && userId) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
  }

  return {
    props: {},
  };
};
