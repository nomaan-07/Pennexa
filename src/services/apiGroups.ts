import { Group } from "../utils/types";
import supabase from "./supabase";

export async function getGroups(): Promise<Group[]> {
  const { data, error } = await supabase.from("pennexa-groups").select("*");

  if (error) {
    console.error(error);
    throw new Error("Groups could not be loaded.");
  }

  return data;
}

type NewGroup = Omit<Group, "id" | "created_at" | "public">;

export async function createGroup(newGroup: NewGroup) {
  const { error } = await supabase.from("pennexa-groups").insert([newGroup]);

  if (error) {
    console.error(error);
    throw new Error("Group could not be created.");
  }
}

export async function deleteGroup(id: number) {
  const { error } = await supabase.from("pennexa-groups").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Group could not be deleted.");
  }
}
