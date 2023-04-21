import { useSelector } from "react-redux";
import Button from "components/button";
import "./cart-dropdown.styles.scss";
// import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "store/add-to-cart-selector";
import CartItem from "components/cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = ({ setOpen, open }) => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setOpen(!open);
    navigate("/cart");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType="inverted" onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
