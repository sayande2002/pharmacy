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
    id: 1,
    name: "Shop",
    component: <HomeOutlinedIcon style={{ fill: "black", fontSize: "30px" }} />,
    route: "/shop",
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
