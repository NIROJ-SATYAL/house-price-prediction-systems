import { createBrowserRouter } from "react-router-dom";
import Home from "client/home/views/Index";
import Login from "auth/Login";
import Register from "auth/Register";
import ClientLayout from "client/common/Layout"
import AdminLayout from "admin/common/Layout"
import Predict from "predict/predict";
import FormDetails from "FormDetails/formDetails";
import User from "admin/user";
import Create from "admin/user/create";
import Index from "admin/predictions/Index";
import AdminDetails from "admin/adminDetails/adminDetails";
import ClientDetails from "client/clientDetails/clientDetails";


const router = createBrowserRouter([
  {
    element: <ClientLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "predict",
        element: <Predict />,
      },
      {
        path: "formDetails",
        element: <FormDetails  />,
      },
      {
        path: "details",
        element: <ClientDetails  />,
      },
    ],
  },{
  path: "/admin",
        element: < AdminLayout / > ,
        children: [{
                path: "",
                element: < User / >
            },
            {
                path: "user",
                element: < User / >
            },
            {
                path: "user/create",
                element: < Create / >
            },
            {
                path: "prediction",
                element: < Index / >
            },
            {
        path: "details",
        element: <AdminDetails  />,
      },
        ]
    }
]);



export default router;
