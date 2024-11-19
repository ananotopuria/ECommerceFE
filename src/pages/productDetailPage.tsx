import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { HiOutlineHeart } from "react-icons/hi";
import data from "./../../public/data/AllProductsStore.json";

type Product = {
  id: string;
  name: string;
  price: number;
  "discount-price"?: number;
  "discount-percentage"?: string;
  img: string;
  alt: string;
  description: string;
  stars: number;
  "times rated": number;
};

function Detail() {
  const { productID } = useParams<{ productID: string }>();
  const allProducts: Product[] = data.allProductsStore;

  const product = allProducts.find((p) => p.id === productID) || null;

  const [selectedImage, setSelectedImage] = useState<string>(
    product?.img || "/img/default-placeholder.png"
  );
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex flex-col items-center p-6">
      <div className="text-sm mb-4">
        <Link to="/" className="opacity-70 hover:opacity-100">
          Home
        </Link>{" "}
        / {product.name}
      </div>

      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <img
            src={selectedImage}
            alt={product.alt}
            className="w-full max-w-lg"
          />
          <div className="flex gap-2">
            <img
              src={product.img}
              alt={product.alt}
              className={`w-16 h-16 cursor-pointer ${
                selectedImage === product.img ? "border-2 border-black" : ""
              }`}
              onClick={() => setSelectedImage(product.img)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div>
            <StarRatings
              rating={product.stars}
              starDimension="20px"
              starSpacing="2px"
              starRatedColor="orange"
            />
            <span>({product["times rated"]} reviews)</span>
          </div>
          <p className="text-lg font-bold">
            ${product["discount-price"] ?? product.price}
          </p>
          <p>{product.description}</p>
          <div className="flex items-center gap-4 mt-4">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
            <button className="btn-primary">Add to Cart</button>
            <button className="btn-secondary">
              <HiOutlineHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
