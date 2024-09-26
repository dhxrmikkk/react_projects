import { lazy } from "react";

// Site Pages

const Homepage = lazy(() => import("./Default/Homepage"));
const Shop = lazy(() => import("./Default/Shop"));
const About = lazy(() => import("./Default/About"));
const Contact = lazy(() => import("./Default/Contact"));

export { Homepage, Shop, About, Contact };
