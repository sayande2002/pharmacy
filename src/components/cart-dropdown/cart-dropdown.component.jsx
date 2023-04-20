// import { useSelector } from "react-redux";
import Button from "components/button";
import "./cart-dropdown.styles.scss";
// import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
// import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = ({ setOpen }) => {
  // const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setOpen((prev) => !prev);
    navigate("/cart");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {/* {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))} */}
      </div>
      <Button buttonType="inverted" onClick={goToCheckoutHandler}>
        Go To Cart
      </Button>
    </div>
  );
};
export default CartDropdown;
