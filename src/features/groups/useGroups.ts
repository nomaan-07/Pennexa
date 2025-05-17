import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getGroups } from "../../services/apiGroups";
import { useToast } from "../../hooks/useToast";
import { Group } from "../../utils/types";

export function useGroups() {
  const { showToast } = useToast();

  const {
    isLoading: isGroupsLoading,
    data: groups,
    error,
  } = useQuery<Group[], Error>({
    queryKey: ["groups"],
    queryFn: getGroups,
  });

  useEffect(() => {
    if (error) {
      showToast("failed", "Groups could not be loaded.");
      console.error(error);
    }
  }, [error, showToast]);

  return { isGroupsLoading, groups, error };
}
