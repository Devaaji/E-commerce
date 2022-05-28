import { BooleanEnum } from './enum/Boolean';

export type UserProfileRemoteData = {
  _id: string;
  username: string;
  email: string;
  photoProfile?: string;
  isAdmin: boolean;
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
