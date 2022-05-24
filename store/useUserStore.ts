import { parseCookies, setCookie, destroyCookie } from 'nookies';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

type UserStoreType = {
  id?: string;
  email?: string;
  accessToken?: string;
  setUserId: (id: string) => void;
  setLogin: (email: string, accessToken: string) => void;
  removeUser: () => void;
};

const useUserStore = create<UserStoreType>(
  devtools(
    (set) => {
      const cookies = parseCookies();
      const { _id: id, _em: email, _t: accessToken } = cookies;

      return {
        id,
        email,
        accessToken,
        setUserId: (newId) => {
          setCookie(null, '_id', newId, { path: '/' });
          set({ id: newId });
        },
        setLogin: (newEmail, newAccessToken) => {
          setCookie(null, '_em', newEmail, { path: '/' });
          setCookie(null, '_t', newAccessToken, { path: '/' });
          set({
            email: newEmail,
            accessToken: newAccessToken,
          });
        },
        removeUser: () => {
          destroyCookie(null, '_em', { path: '/' });
          destroyCookie(null, '_t', { path: '/' });
          destroyCookie(null, '_id', { path: '/' });
          set({
            id: undefined,
            email: undefined,
            accessToken: undefined,
          });
        },
      };
    },
    { name: 'user' }
  )
);

export default useUserStore;
