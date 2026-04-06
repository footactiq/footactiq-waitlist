"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const SignupContext = createContext({
  showSignup: false,
  openSignup: () => {},
  closeSignup: () => {},
});

export function SignupProvider({ children }: { children: ReactNode }) {
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSignup(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SignupContext.Provider value={{
      showSignup,
      openSignup: () => setShowSignup(true),
      closeSignup: () => setShowSignup(false),
    }}>
      {children}
    </SignupContext.Provider>
  );
}

export const useSignup = () => useContext(SignupContext);