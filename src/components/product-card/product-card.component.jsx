import { useDispatch, useSelector } from "react-redux";
// import { addItemToCart } from "../../store/cart/cart.action";
// import { selectCartItems } from "../../store/cart/cart.selector";
import { useState } from "react";
import "./product-card.styles.scss";
import Button from "components/button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "store/add-to-cart-Slice";

const ProductCard = ({ product }) => {
  const [quantityOpen, setQuantityOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { title, price, thumbnail } = product;

  const dispatch = useDispatch();
  // const cartItems = useSelector(selectCartItems);
  // const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  const clearItemHandler = () => dispatch(clearItemFromCart(product));
  const addItemHandler = () => dispatch(addItemToCart(product));
  const removeItemHandler = () => dispatch(removeItemFromCart(product));

  const addProductToCart = () => {
    addItemHandler();
    setQuantityOpen(!quantityOpen);
  };
  const addQuantity = () => {
    addItemHandler();
    setQuantity((prev) => prev + 1);
  };
  const deleteQuantity = () => {
    removeItemHandler();
    setQuantity((prev) => prev - 1);
  };
  return (
    <div className="product-card-container">
      <img src={thumbnail} alt={`${title}`} />
      <div className="footer">
        <span className="name">{title}</span>
        <div className="sub-footer">
          <span className="price">{price}</span>
          {quantity > 0 && quantityOpen ? (
            <div className="text-black flex justify-center items-center gap-4 bg-slate-300 rounded-xl">
              <AiOutlineMinus
                className="bg-black rounded-[50%] text-white"
                onClick={deleteQuantity}
              />
              {quantity}
              <AiOutlinePlus
                className="bg-black rounded-[50%] text-white"
                onClick={addQuantity}
              />
            </div>
          ) : (
            <Button buttonType="inverted" onClick={addProductToCart}>
              Add
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
