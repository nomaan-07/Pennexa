import UserAvatar from "../../features/authentication/UserAvatar";
import Username from "../../features/authentication/Username";

function UserProfile() {
  return (
    <div className="mt-2 flex flex-col items-center gap-y-3 text-center">
      <UserAvatar />
      <Username />
    </div>
  );
}

export default UserProfile;
