import React, { createContext, useState, useEffect, ReactNode } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ModalState = {
  open: boolean;
  messageType: "add" | "delete";
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  removeItemFromCart: (item: CartItem) => void;
  cartItemsCount: number;
  getCartTotal: () => number;
  handleCloseModal: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") || "[]")
      : []
  );
  const [modalState, setModalState] = useState<ModalState>({
    open: false,
    messageType: "add",
  });

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: CartItem) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
    setModalState({ open: true, messageType: "delete" });
  };

  const removeItemFromCart = (item: CartItem) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    setModalState({ open: true, messageType: "delete" });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const { open, messageType } = modalState;

  const getMessageContent = () => {
    if (messageType === "add") {
      return (
        <div className="flex items-center space-x-2 text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m1 5a9 9 0 11-6-6"
            />
          </svg>
          <span>Item added to cart</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center space-x-2 text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>Item removed from cart</span>
        </div>
      );
    }
  };

  const cartItemsCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartItemsCount,
        getCartTotal,
        removeItemFromCart,
        handleCloseModal: () => setModalState({ open: false, messageType }),
      }}
    >
      {children}
      {open && (
        <div className="fixed bottom-5 right-5 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
          {getMessageContent()}
          <button
            onClick={() => setModalState({ open: false, messageType })}
            className="ml-4 text-gray-500 hover:text-gray-800"
          >
            Close
          </button>
        </div>
      )}
    </CartContext.Provider>
  );
};
