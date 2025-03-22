import { LucideUser } from "lucide-react";

function UserAvatar() {
  const avatar = undefined;

  return (
    <div className="flex size-16 items-center justify-center rounded-full border border-slate-300 bg-slate-100 dark:border-slate-500 dark:bg-slate-600">
      {avatar ? (
        <img className="rounded-full bg-cover" src={avatar} alt="user avatar" />
      ) : (
        <LucideUser
          className="size-12 text-slate-500 dark:text-slate-300"
          strokeWidth={1}
        />
      )}
    </div>
  );
}

export default UserAvatar;
