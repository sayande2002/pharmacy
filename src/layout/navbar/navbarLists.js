import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const navbarLists = [
  {
    id: 1,
    name: "Home",
    component: <HomeOutlinedIcon style={{ fill: "black", fontSize: "30px" }} />,
    route: "/",
  },

  {
    id: 4,
    name: "My Cart",
    component: (
      <ShoppingCartOutlinedIcon style={{ fill: "black", fontSize: "30px" }} />
    ),
    route: "/cart",
  },
];
