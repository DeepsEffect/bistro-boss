import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  HomeIcon,
  Bars3Icon,
  ShoppingBagIcon,
  PhoneArrowDownLeftIcon,
  CurrencyBangladeshiIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { HomeModernIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";
import './styles.css'
const Sidebar = () => {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Bistro Boss <br /> Restaurant
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          User Home
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <HomeModernIcon className="h-5 w-5" />
          </ListItemPrefix>
          Reservation
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <CurrencyBangladeshiIcon className="h-5 w-5" />
          </ListItemPrefix>
          Payment History
        </ListItem>
    <NavLink to={'/dashboard/cart'}>
    <ListItem>
          <ListItemPrefix>
            <ShoppingCartIcon className="h-5 w-5" />
          </ListItemPrefix>
          My Cart
        </ListItem>
    </NavLink>
        <hr />
  <NavLink to={'/'}>
  <ListItem>
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
  </NavLink>
        <ListItem>
          <ListItemPrefix>
            <Bars3Icon className="h-5 w-5" />
          </ListItemPrefix>
          Menu
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Shop
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PhoneArrowDownLeftIcon className="h-5 w-5" />
          </ListItemPrefix>
          Contact
        </ListItem>
      </List>
    </Card>
  );
};

export default Sidebar;
