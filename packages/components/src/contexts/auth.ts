import React from "react";

interface IAuth {
  signOut: () => void;
  signIn : (data: { address: string, password: string }) => void;
  signUp : (data: { address: string, password: string, account: string }) => void;
}

export enum AuthTypes {
  SIGN_UP       = 'SIGN_UP',
  SIGN_IN       = 'SIGN_IN',
  SIGN_OUT      = 'SIGN_OUT',
  RESTORE_TOKEN = 'RESTORE_TOKEN',
};

export const AuthContext = React.createContext<IAuth>({
  signOut: function noop() {},
  signIn : function noop() {},
  signUp : function noop() {},
});