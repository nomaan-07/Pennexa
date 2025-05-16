import { FallbackProps } from "react-error-boundary";
import Button from "../buttons/Button";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-9xl font-bold">500</h1>
      <h2 className="mt-4 text-2xl font-medium text-slate-600 dark:text-slate-400">
        Something Went Wrong
      </h2>
      <p className="mt-2 mb-8 text-slate-500 dark:text-slate-400">
        {error.message}
      </p>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
}

export default ErrorFallback;
