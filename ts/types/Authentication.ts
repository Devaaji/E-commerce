import { RemoteResponse } from './RemoteResponse';

type LoginSuccessResponseData = {
  message: string;
  email: string;
  token: string;
};

type RegisterErrorResponseMessageField = {
  username?: string;
  email?: string;
  password?: string;
};

type RegisterErrorResponseMessage = RemoteResponse & {
  message: RegisterErrorResponseMessageField;
};

export type LoginSuccessResponse = RemoteResponse & {
  data: LoginSuccessResponseData;
};

export type RegisterErrorResponse = RemoteResponse & {
  data: RegisterErrorResponseMessage;
};
