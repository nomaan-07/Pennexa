import { useEffect } from "react";
import { useNavigate } from "react-router";

import Spinner from "../../ui/common/Spinner";

import { useUser } from "./useUser";

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
