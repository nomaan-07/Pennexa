import { UserAttributes } from "@supabase/supabase-js";
import supabase, { supabaseUrl } from "./supabase";
import { Avatar } from "../utils/types";

interface Signup {
  email: string;
  password: string;
  username: string;
}

interface Login {
  email: string;
  password: string;
}

interface UpdateCurrentUser {
  password?: string;
  username?: string;
  avatar?: Avatar;
}

export async function signup({ email, password, username }: Signup) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }: Login) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;
  return user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({
  password,
  username,
  avatar,
}: UpdateCurrentUser) {
  let updateData: UserAttributes = {};

  if (password) updateData = { password };
  if (username) updateData = { data: { username } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}-${Math.random().toString(36).slice(2, 10)}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  const { data: updatedUser, error: updateUserError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (updateUserError) throw new Error(updateUserError.message);

  return updatedUser;
}
