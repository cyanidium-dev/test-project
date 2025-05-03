import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IPORTFOLIO_BUTTON
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}
