import { createBrowserRouter } from "react-router-dom";
import Signup from './Pages/Signup.jsx'
import Login  from './Pages/Login.jsx'

const router = createBrowserRouter([
 
   
    ],);

export default router;









// ejemplo de como implementar router
// https://johnserrano.co/blog/aprende-a-crear-rutas-con-react-router
//import { createBrowserRouter } from "react-router-dom";
// import LandingPage from "../pages/LandingPage";
// import PropertiesPage from "../pages/PropertiesPage";
// import LoginPage from "../pages/LoginPage";
// import SignupPage from "../pages/SignupPage";
// import NewPropertyPage from "../pages/NewPropertyPage";
// import ShowPropertyPage from "../pages/ShowPropertyPage";
// import Home from "../pages/Home";
// import ProfilePropertiesPage from "../pages/ProfilePropertiesPage";
// import SignupHomePage from "../pages/SignupHomePage";
// import ErrorPage from "../pages/ErrorPage";
// import {
//   PropertiesActive,
//   PropertiesClosed,
//   PropertiesContacted,
//   PropertiesFavorites,
// } from "../components/ProfileComponents/ProfileComponents";
// import {
//   favoriteProperties,
//   indexProperties,
//   listBestPrice,
//   myProperty,
//   propertiesContacted,
//   showProperty,
// } from "../services/properties-services";
// import { ProfilePage } from "../pages/ProfilePage";

// const router = createBrowserRouter([
//   {
//     errorElement: <ErrorPage/>,
//     path: "/",
//     element: <Home/>,
//     children: [
//       {
//         index: true,
//         // loader: loaderHome,
//         loader: listBestPrice,
//         element: <LandingPage />,
//       },
//       {
//         path: "/properties",
//         loader: indexProperties,
//         element: <PropertiesPage />,
//       },
//       {
//         path: "/properties/:id",
//         loader: showProperty,
//         element: <ShowPropertyPage />,
//       },
//       {
//         path: "/login",
//         // action: actionLogin,
//         element: <LoginPage />,
//       },
//       {
//         path: "/signup-home",
//         element: <SignupHomePage />,
//       },
//       {
//         path: "/signup",
//         element: <SignupPage />,
//       },
//       {
//         path: "/new-property",
//         element: <NewPropertyPage />,
//       },
//       {
//         path: "/profile",
//         element: <ProfilePage />,
//       },
//       {
//         //path: "/profile",
//         element: <ProfilePropertiesPage />,
//         children: [
//           {
//             path: "/profile/active",
//             loader: myProperty,
//             element: <PropertiesActive />,
//           },
//           {
//             path: "/profile/closed",
//             loader: myProperty,
//             element: <PropertiesClosed />,
//           },
//           {
//             path: "/profile/favorites",
//             loader: favoriteProperties,
//             element: <ErrorPage/>,
//           },
//           {
//             path: "/profile/contacted",
//             loader: propertiesContacted,
//             element: <PropertiesContacted />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// export default router;
