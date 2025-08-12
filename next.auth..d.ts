import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      image?: string | null;
      access_token: string;
      role: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
    access_token: string;
    role: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string;
    role: string;
  }
}
