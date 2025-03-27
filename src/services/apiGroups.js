import supabase from "./supabase";

export async function getGroups() {
  const { data, error } = await supabase.from("pennexa-groups").select("*");

  if (error) {
    console.error(error);
    throw new Error("Groups could not be loaded.");
  }

  return data;
}

export async function createGroup(newGroup) {
  const { error } = await supabase.from("pennexa-groups").insert([newGroup]);

  if (error) {
    console.error(error);
    throw new Error("Group could not be created.");
  }
}
