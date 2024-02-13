"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  isModal?: boolean;
}

const LoginButton = ({ children, isModal = false }: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => router.push("/auth/login");

  if (isModal) {
    return <span>Modal to be done</span>;
  }

  return <div onClick={() => onClick}>{children}</div>;
};

export default LoginButton;
