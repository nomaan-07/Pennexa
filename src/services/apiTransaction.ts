import { Transaction } from "../utils/types";
import supabase from "./supabase";

export async function getTransactions(): Promise<Transaction[]> {
  const { data, error } = await supabase
    .from("pennexa-transactions")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be loaded.");
  }

  return data;
}

type NewTransaction = Omit<
  Transaction,
  "id" | "created_at" | "edited_at" | "public"
>;

export async function createTransaction(newTransaction: NewTransaction) {
  const { error } = await supabase
    .from("pennexa-transactions")
    .insert([newTransaction])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be created.");
  }
}

export async function deleteTransaction(id: number) {
  const { error } = await supabase
    .from("pennexa-transactions")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be deleted.");
  }
}

interface UpdateTransaction {
  id: number;
  updatedTransaction: Partial<Omit<Transaction, "id">>;
}

export async function updateTransaction({
  id,
  updatedTransaction,
}: UpdateTransaction) {
  const { data, error } = await supabase
    .from("pennexa-transactions")
    .update(updatedTransaction)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be updated.");
  }

  return data;
}
