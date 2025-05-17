export type ClickHandler = () => void;

export type ButtonType =
  | "primary"
  | "secondary"
  | "pagination"
  | "danger"
  | "logout";

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
  type: "income" | "expense";
  public: boolean;
}

export type CustomToastType = "success" | "failed" | "warning";
