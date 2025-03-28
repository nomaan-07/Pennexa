import { useEffect } from "react";
import Spinner from "../../ui/common/Spinner";

import { useUser } from "./useUser";
import { useNavigate } from "react-router";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/login");
  }, [navigate, isLoading, isAuthenticated]);

  if (isLoading) return <Spinner type="fullPage" />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
