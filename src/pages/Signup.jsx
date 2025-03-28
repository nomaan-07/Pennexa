import Heading from "../ui/layout/Heading";
import Logo from "../ui/navigation/Logo";
import LoginLayout from "../ui/layout/LoginLayout";
import LoginFooterLink from "../ui/navigation/LoginFooterLink";
import SignupForm from "../features/authentication/SignupForm";

function Signup() {
  return (
    <LoginLayout>
      <Logo className="justify-center" />
      <Heading className="text-center">Signup to continue</Heading>
      <SignupForm />
      <LoginFooterLink to="/login">Already have an account?</LoginFooterLink>
    </LoginLayout>
  );
}

export default Signup;
