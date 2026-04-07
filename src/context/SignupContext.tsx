"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface SignupForm {
  name: string;
  email: string;
  club: string;
  level: string;
}

interface SignupContextValue {
  openSignup: () => void;
  closeSignup: () => void;
  showSignup: boolean;
  showThankYou: boolean;
  form: SignupForm;
  setForm: React.Dispatch<React.SetStateAction<SignupForm>>;
  loading: boolean;
  error: string;
  handleSubmit: () => Promise<void>;
  closeThankYou: () => void;
}

const SignupContext = createContext<SignupContextValue | null>(null);

export function SignupProvider({ children }: { children: ReactNode }) {
  const [showSignup, setShowSignup]     = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState("");
  const [form, setForm]                 = useState<SignupForm>({
    name: "", email: "", club: "", level: "",
  });

  const openSignup  = useCallback(() => setShowSignup(true), []);
  const closeSignup = useCallback(() => { setShowSignup(false); setError(""); }, []);
  const closeThankYou = useCallback(() => setShowThankYou(false), []);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.level) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setShowSignup(false);
        setShowThankYou(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignupContext.Provider
      value={{
        openSignup, closeSignup,
        showSignup, showThankYou,
        form, setForm,
        loading, error,
        handleSubmit, closeThankYou,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}

export function useSignup() {
  const ctx = useContext(SignupContext);
  if (!ctx) throw new Error("useSignup must be used inside <SignupProvider>");
  return ctx;
}