export type ResetPasswordFormValues = {
    email: string;
  };
  
  export type LoginFormValues = ResetPasswordFormValues & {
    password: string;
  };
  
  export type SignUpFormValues = {
    username: string;
    email: string;
    password: string;
  };
  
  export type ChangePasswordFormValues = {
    password: string;
    repassword: string;
  };
  