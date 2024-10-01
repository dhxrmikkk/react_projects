import { lazy } from "react";

// Site Pages

const Homepage = lazy(() => import("./Default/Homepage"));
const Shop = lazy(() => import("./Default/Shop"));
const Cart = lazy(() => import("./Default/Cart"));
const About = lazy(() => import("./Default/About"));
const Contact = lazy(() => import("./Default/Contact"));
const ProductDetail = lazy(() => import("./Default/ProductDetail"));
const ErrorPage = lazy(() => import("../Pages/Other/ErrorPage"));

// auth pages

const Login = lazy(() => import("../Pages/Auth/Login"));
const Register = lazy(() => import("../Pages/Auth/Register"));
export {
  Homepage,
  Shop,
  Cart,
  About,
  Contact,
  ProductDetail,
  ErrorPage,
  Login,
  Register,
};
