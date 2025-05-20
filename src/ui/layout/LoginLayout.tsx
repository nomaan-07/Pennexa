import { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      {children}
    </div>
  );
}

export default LoginLayout;
