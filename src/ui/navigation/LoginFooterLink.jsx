import { NavLink } from "react-router";

function LoginFooterLink({ to, children }) {
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
