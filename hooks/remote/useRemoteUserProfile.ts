import { useEffect, useMemo } from 'react';

import useSWR from 'swr';
import useUserStore from '../../store/useUserStore';
import { GetUSerProfileResponse } from '../../ts/UserProfile';
import userProfileDataMapper from '../../utils/mapper/userProfileDataMapper';

const useRemoteUserProfile = () => {
  const email = useUserStore((state) => state.email);
  const [setUserId, removeUser] = useUserStore((state) => [
    state.setUserId,
    state.removeUser,
  ]);

  
  const uri = email ? `/auth/${email}` : null;
  const { data, error, ...others } = useSWR<GetUSerProfileResponse>(uri);

  const newData = useMemo(
    () =>
      data
        ? { ...data, data: userProfileDataMapper.toLocal(data?.data[0]) }
        : data,
    [data]
  );

  useEffect(() => {
    if (newData) setUserId(newData.data.id);
    else if (error) removeUser();
  }, [newData]);


  return { data: newData, error, ...others } as const;
};

export default useRemoteUserProfile;
