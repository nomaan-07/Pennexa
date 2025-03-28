import { LucideUser } from "lucide-react";
import { useUser } from "./useUser";

function UserProfile() {
  const { user } = useUser();
  const avatar = user?.user_metadata?.avatar;
  const username = user?.user_metadata?.username;
  return (
    <div className="mt-2 flex flex-col items-center gap-y-3 text-center">
      <div className="flex size-16 items-center justify-center rounded-full border border-slate-300 bg-slate-100 dark:border-slate-500 dark:bg-slate-600">
        {avatar ? (
          <img
            className="rounded-full bg-cover"
            src={avatar}
            alt="user avatar"
          />
        ) : (
          <LucideUser
            className="size-12 text-slate-500 dark:text-slate-300"
            strokeWidth={1}
          />
        )}
      </div>
      <p className="text-slate-400 dark:text-slate-200">{username}</p>
    </div>
  );
}

export default UserProfile;
