import { lazy } from "react";

// Site Pages

const Homepage = lazy(() => import("./Default/Homepage"));
const Shop = lazy(() => import("./Default/Shop"));
const About = lazy(() => import("./Default/About"));
const Contact = lazy(() => import("./Default/Contact"));
const ProductDetail = lazy(() => import("./Default/ProductDetail"));
const ErrorPage = lazy(() => import("../Pages/Other/ErrorPage"));

export { Homepage, Shop, About, Contact, ProductDetail, ErrorPage };
