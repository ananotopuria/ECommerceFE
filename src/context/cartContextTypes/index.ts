export type CartItem = {
  id: string;
  // id: number;
  name: string;
  price: number;
  // quantity: number;
  img?: string;
  alt?: string;
  quantity: number;
};

export type ModalState = {
  open: boolean;
  messageType: "add" | "delete";
};

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  cartItemsCount: number;
  handleCloseModal: () => void;
}

