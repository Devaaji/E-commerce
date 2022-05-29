import { BooleanEnum } from '../../ts/enum/Boolean';
import { UserProfile, UserProfileRemoteData } from '../../ts/UserProfile';

type UserProfileDataMapperType = {
  toLocal: (userProfile: UserProfileRemoteData) => UserProfile;
};

const userProfileDataMapper: UserProfileDataMapperType = {
  toLocal: (userProfile) => ({
    id: userProfile._id,
    name: userProfile.username,
    email: userProfile.email,
  }),
};

export default userProfileDataMapper;
