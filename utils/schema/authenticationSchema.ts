import * as Yup from 'yup';

import type {
  ChangePasswordFormValues,
  LoginFormValues,
  ResetPasswordFormValues,
  SignUpFormValues,
} from '../../ts/types/schema/authenticationSchema';

export const loginSchema: Yup.SchemaOf<LoginFormValues> = Yup.object().shape({
  email: Yup.string()
    .email('Format email tidak sesuai')
    .required('Email harus diisi'),
  password: Yup.string()
    .required('Password harus diisi')
    .min(6, 'Minimal terdiri dari 6 karakter'),
});

export const signUpSchema: Yup.SchemaOf<SignUpFormValues> = Yup.object().shape({
  username: Yup.string()
    .required('Nama harus diisi'),
  email: Yup.string()
    .email('Format email tidak sesuai')
    .required('Email harus diisi'),
  password: Yup.string()
    .required('Password harus diisi')
    .min(6, 'Minimal terdiri dari 6 karakter'),
});

export const resetPasswordSchema: Yup.SchemaOf<ResetPasswordFormValues> =
  Yup.object().shape({
    email: Yup.string()
      .email('Format email tidak sesuai')
      .required('Email harus diisi'),
  });

export const changePasswordSchema: Yup.SchemaOf<ChangePasswordFormValues> =
  Yup.object().shape({
    password: Yup.string()
      .required('Password harus diisi')
      .min(6, 'Minimal terdiri dari 6 karakter'),
    repassword: Yup.string()
      .required('Password harus diisi')
      .oneOf([Yup.ref('password'), null], 'password does not match'),
  });
