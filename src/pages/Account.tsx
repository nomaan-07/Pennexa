import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdateUserPasswordForm from "../features/authentication/UpdateUserPasswordForm";
import AccountSection from "../ui/layout/AccountSection";

function Account() {
  return (
    <>
      <AccountSection title="Update your data">
        <UpdateUserDataForm />
      </AccountSection>
      <AccountSection title="Update your password">
        <UpdateUserPasswordForm />
      </AccountSection>
    </>
  );
}

export default Account;
