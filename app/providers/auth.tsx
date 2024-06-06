"use client";

import {SessionProvider, SessionProviderProps} from 'next-auth/react';

type Props = {
    children?: React.ReactNode;
}

export const NextAuthProvider = ({children}: Props) => {
    return <SessionProvider>{children}</SessionProvider>;
}

export const AuthProvider = ({ children }: SessionProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>;
};