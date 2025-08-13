import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import royalsApi from './api';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<any> {
        return (
          royalsApi
            .post('/login', {
              email: credentials?.email,
              password: credentials?.password,
            })
            .then((response) => {
              return response.data;
            })
            .catch((error) => {
              throw new Error(error.response.data.message);
            }) || null
        );
      },
    }),
  ],
  secret: 'RvHUu3anYw6Zm0v65aQTubNkXeWtRbl031imBS3+t9E',
  callbacks: {
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          access_token: token.access_token,
          role: token.role,
          user_id: token.user_id,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          access_token: user?.access_token,
          role: user.role,
          user_id: user.id,
        };
      }
      return token;
    },
  },
};
