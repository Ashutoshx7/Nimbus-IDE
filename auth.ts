import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
 

export const {handlers,signIn,SignOut,auth}=NextAuth({
    providers:[],

})

