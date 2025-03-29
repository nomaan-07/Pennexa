import supabase from "./supabase";

export async function getTransactions() {
  const { data, error } = await supabase
    .from("pennexa-transactions")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be created.");
  }

  return data;
}

export async function createTransaction(newTransaction) {
  const { error } = await supabase
    .from("pennexa-transactions")
    .insert([newTransaction]);

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be created.");
  }
}

export async function deleteTransaction(id) {
  const { error } = await supabase
    .from("pennexa-transactions")
    .delete(id)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be deleted.");
  }
}

export async function updateTransaction({ id, updatedTransaction }) {
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
