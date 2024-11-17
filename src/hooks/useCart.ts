import { useContext } from "react";
import { CartContext } from "./../context/cartContext";
import { CartContextType } from "../context/cartContextTypes/index.ts";

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};