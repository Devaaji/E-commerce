import { BooleanEnum } from './enum/Boolean';

export type UserProfileRemoteData = {
  id_user: string;
  username: string;
  email: string;
  photoProfile?: string;
  isAdmin: BooleanEnum;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  photo?: string;
  isAdmin: boolean;
};

export type GetUSerProfileResponse = {
  data: UserProfileRemoteData[];
};
