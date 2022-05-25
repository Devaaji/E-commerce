import { BooleanEnum } from '../../ts/enum/Boolean';
import { UserProfile, UserProfileRemoteData } from '../../ts/UserProfile';

type UserProfileDataMapperType = {
  toLocal: (userProfile: UserProfileRemoteData) => UserProfile;
};

const userProfileDataMapper: UserProfileDataMapperType = {
  toLocal: (userProfile) => ({
    id: userProfile.id_user,
    name: userProfile.username,
    email: userProfile.email,
    photo: userProfile.photoProfile,
    isAdmin:
      (userProfile.isAdmin.toString() as BooleanEnum) === BooleanEnum.TRUE,
  }),
};

export default userProfileDataMapper;
