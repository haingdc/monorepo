import React from "react";

interface IAuth {
  signOut: () => void;
  signIn : (person: { address: string, password: string }) => void;
}


export const AuthContext = React.createContext<IAuth>({
  signOut: function noop() {},
  signIn : function noop() {}
});