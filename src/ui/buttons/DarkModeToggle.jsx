import { LucideMoon, LucideSun } from "lucide-react";

import { useDarkMode } from "../../hooks/useDarkMode";

function DarkModeToggle() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <>
      <div
        className="relative flex h-11 w-32 items-center justify-between rounded-full border border-slate-300 bg-slate-100 px-0.5 text-slate-500 lg:w-26 dark:border-slate-500 dark:bg-slate-700 dark:text-slate-300"
        onClick={toggleDarkMode}
        role="button"
      >
        <div className="z-10 rounded-full p-1.5 text-amber-50 dark:text-inherit">
          <LucideSun className="size-6" strokeWidth={1.5} />
        </div>
        <div className="dark:text-slate-40 z-10 rounded-full p-1.5 text-inherit">
          <LucideMoon className="size-6" strokeWidth={1.5} />
        </div>

        <div className="absolute top-0.75 left-0.5 size-9 rounded-full bg-amber-200 transition-all duration-500 dark:translate-x-21.5 dark:bg-sky-900 dark:lg:translate-x-15.5"></div>
      </div>
    </>
  );
}

export default DarkModeToggle;
