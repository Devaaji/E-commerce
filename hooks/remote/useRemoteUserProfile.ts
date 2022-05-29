import { useEffect, useMemo } from 'react';

import useSWR from 'swr';

import useUserStore from '../../store/useUserStore';
import userProfileDataMapper from '../../utils/mapper/userProfileDataMapper';

const useRemoteUserProfile = () => {
  
  const uri = `/auth/depdep@gmail.com`;
  const { data, error, ...others } = useSWR(uri);

  return { data: data, error, ...others } as const;
};

export default useRemoteUserProfile;
