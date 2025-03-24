import { NavLink } from "react-router";

const baseStyles =
  "flex flex-col items-center justify-center gap-1 text-xs capitalize select-none";

const types = {
  dashboard:
    "mobile-nav-link--dashboard xs:border-8 xs:-translate-y-8 xs:size-18 size-16 -translate-y-7 rounded-full border-6 border-slate-100 bg-emerald-500 text-white dark:border-slate-900",
  other: "mobile-nav-link xs:size-auto relative size-10 text-slate-400",
};

function MobileNavItem({ name = "other", icon, path }) {
  const isDashboard = name === "dashboard";

  const className = `${baseStyles} ${isDashboard ? types["dashboard"] : types["other"]}`;

  return (
    <NavLink to={path} className={className}>
      {icon}
      {!isDashboard && (
        <>
          <span className="xs:block hidden">{name}</span>
          <span className="circle xs:-top-5 absolute -top-4.5 hidden size-4 rounded-full border-4 border-slate-100 bg-emerald-500 dark:border-slate-900"></span>
        </>
      )}
    </NavLink>
  );
}

export default MobileNavItem;
