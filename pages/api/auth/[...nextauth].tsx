import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId:
        '645000343568-314peqgaao9puejvcli1bosk7e76gcfm.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
});
console.log('Data', NextAuth);
