// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialProvider({
      type: 'credentials',
      credentials: {},
      authorize: async (credentials) => {
        const { email } = credentials as { email: string };

        const prisma = new PrismaClient();
        const userExists = await prisma.users.findUnique({
          where: {
            email: email,
          },
        });

        console.log(userExists);

        if (!userExists) {
          prisma.$disconnect();
          throw new Error('No user with that email exists');
        }

        prisma.$disconnect();
        return { id: 'crypto.randomUUID()', email: email };
      },
    }),
  ],
};

export default NextAuth(authOptions);
