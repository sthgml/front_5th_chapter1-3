import { User } from "../types";
import { createContext, ReactNode, useContext, useState } from "react";
import { LoginContextType } from "../types";

export const LoginContext = createContext<LoginContextType>({
  user: {
    id: 0,
    name: "",
    email: "",
  },
  setUser: () => {},
});

type Props = {
  children: ReactNode;
};

export const LoginContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const loginContext: LoginContextType = {
    user,
    setUser,
  };

  return (
    <LoginContext.Provider value={loginContext}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
