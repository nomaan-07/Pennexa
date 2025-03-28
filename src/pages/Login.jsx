import Heading from "../ui/layout/Heading";
import Logo from "../ui/navigation/Logo";
import LoginLayout from "../ui/layout/LoginLayout";
import LoginFooterLink from "../ui/navigation/LoginFooterLink";
import LoginForm from "../features/authentication/LoginForm";
import Spinner from "../ui/common/Spinner";

import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Login() {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard", { replace: true });
  }, [isAuthenticated, navigate]);

  if (isLoading) return <Spinner type="fullPage" />;

  if (isAuthenticated) return null;

  return (
    <LoginLayout>
      <Logo className="justify-center" />
      <Heading className="text-center">Log in to your account</Heading>
      <LoginForm />
      <LoginFooterLink to="/signup">Don't have an account?</LoginFooterLink>
    </LoginLayout>
  );
}

export default Login;
