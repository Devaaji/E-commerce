export type UserProfileRemoteData = {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
};

export type GetUSerProfileResponse = {
  data: UserProfileRemoteData[];
};
