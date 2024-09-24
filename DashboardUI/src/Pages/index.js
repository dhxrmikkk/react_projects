import { lazy } from "react";

//auth Pages

const Login = lazy(() => import("./auth/Login"));
const Register = lazy(() => import("./auth/Register"));

// Admin Pages

const AddProduct = lazy(() => import("./Admin/AddProduct"));
const Dashboard = lazy(() => import("./Admin/Dashboard"));
const EditProduct = lazy(() => import("./Admin/EditProduct"));
const Notification = lazy(() => import("./Admin/Notification"));
const Products = lazy(() => import("./Admin/Products"));
const Settings = lazy(() => import("./Admin/Settings"));
const Users = lazy(() => import("./Admin/Users"));

export {
  Login,
  Register,
  AddProduct,
  Dashboard,
  EditProduct,
  Notification,
  Products,
  Settings,
  Users,
};
