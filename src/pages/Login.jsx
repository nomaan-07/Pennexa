import Heading from "../ui/layout/Heading";
import Logo from "../ui/navigation/Logo";
import LoginLayout from "../ui/layout/LoginLayout";
import LoginFooterLink from "../ui/navigation/LoginFooterLink";
import LoginForm from "../features/authentication/LoginForm";

function Signup() {
  return (
    <LoginLayout>
      <Logo className="justify-center" />
      <Heading className="text-center">Log in to your account</Heading>
      <LoginForm />
      <LoginFooterLink to="/signup">Don't have an account?</LoginFooterLink>
    </LoginLayout>
  );
}

export default Signup;
