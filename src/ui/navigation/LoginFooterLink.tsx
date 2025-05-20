import { ReactNode } from "react";
import { NavLink } from "react-router";

interface LoginFooterLinkProps {
  to: "/login" | "/signup";
  children: ReactNode;
}

function LoginFooterLink({ to, children }: LoginFooterLinkProps) {
  return (
    <p className="text-xs sm:text-sm">
      {children}{" "}
      <NavLink to={to} className="text-emerald-500 md:cursor-pointer">
        {to === "/login" ? "Login" : "Signup"}
      </NavLink>
    </p>
  );
}

export default LoginFooterLink;
