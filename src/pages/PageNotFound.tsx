import { useNavigate } from "react-router";
import Button from "../ui/buttons/Button";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-medium text-slate-600 dark:text-slate-400">
        Page Not Found
      </h2>
      <p className="mt-2 mb-8 text-slate-500 dark:text-slate-400">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}

export default NotFoundPage;
