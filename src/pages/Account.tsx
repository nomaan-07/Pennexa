import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdateUserPasswordForm from "../features/authentication/UpdateUserPasswordForm";
import Heading from "../ui/layout/Heading";

function Account() {
  return (
    <>
      <div className="space-y-2 sm:space-y-4">
        <Heading>Update your data</Heading>
        <UpdateUserDataForm />
      </div>
      <div className="space-y-2 sm:space-y-4">
        <Heading>Update your password</Heading>
        <UpdateUserPasswordForm />
      </div>
    </>
  );
}

export default Account;
