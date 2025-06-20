export type ClickHandler = () => void;

export type ButtonType =
  | "primary"
  | "secondary"
  | "pagination"
  | "danger"
  | "logout";

export type CustomToastType = "success" | "failed" | "warning";

export type TransactionType = "income" | "expense";
export interface GroupColors {
  textColor: string;
  bgColor100: string;
  bgColor600: string;
}

export interface Group {
  id: number;
  created_at: string;
  name: string;
  icon: string;
  colors: GroupColors;
  type: TransactionType;
  public: boolean;
}

export interface TransactionCategory extends GroupColors {
  name: string;
  icon: string;
}

export interface Transaction {
  id: number;
  created_at: string;
  edited_at: string | null;
  category: TransactionCategory;
  amount: number;
  type: TransactionType;
  date: string;
  public: boolean;
  description: string;
}

export type FilterValue = "all" | "7" | "30" | "90";
export type SortValue = "date-desc" | "date-asc" | "amount-desc" | "amount-asc";
export interface Option<T extends string> {
  value: T;
  label: string;
}

export type Avatar = File | string | null;
