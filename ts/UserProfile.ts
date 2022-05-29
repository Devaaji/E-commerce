export type UserProfileRemoteData = {
  _id: string;
  username: string;
  email: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
};

export type GetUSerProfileResponse = {
  data: UserProfileRemoteData[];
};
