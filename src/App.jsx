import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ShoppingCart from "./pages/ShoppingCart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Football from "./pages/Football";
import Running from "./pages/Running";
import Basketball from "./pages/Basketball";
import Fitness from "./pages/Fitness";
import Shoes from "./pages/Shoes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Payment from "./pages/Payment";
import { AuthProvider } from "./context/AuthContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ConfirmLogin from "./pages/ConfirmLogin";
import Profile from "./pages/Profile";
import ProfileHome from "./features/profile/ProfileHome";
import Orders from "./features/profile/Orders";
import Favorite from "./features/profile/Favorite";
import PersonalInfo from "./features/profile/PersonalInfo";
import { Toaster } from "react-hot-toast";
import BlogContent from "./pages/BlogContent";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "shopping-cart",
          element: <ShoppingCart />,
        },
        {
          path: "profile",
          element: <Profile />,
          children: [
            {
              path: "",
              element: <ProfileHome />,
            },
            {
              path: "orders",
              element: <Orders />,
            },
            {
              path: "favorite",
              element: <Favorite />,
            },
            {
              path: "personal-info",
              element: <PersonalInfo />,
            },
          ],
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "football",
          element: <Football />,
        },
        {
          path: "football/:shoesId",
          element: <Shoes />,
        },
        {
          path: "running/:shoesId",
          element: <Shoes />,
        },
        {
          path: "basketball/:shoesId",
          element: <Shoes />,
        },
        {
          path: "fitness/:shoesId",
          element: <Shoes />,
        },
        {
          path: "running",
          element: <Running />,
        },
        {
          path: "basketball",
          element: <Basketball />,
        },
        {
          path: "fitness",
          element: <Fitness />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "blog/:blogId",
          element: <BlogContent />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
      ],
    },
    {
      path: "/users",
      children: [
        { path: "login", element: <Login /> },
        {
          path: "confirm",
          element: <ConfirmLogin />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "text-xs md:text-base mt-10",
            duration: 5000,
            style: {
              background: "#000000",
              color: "#fff",
            },
            // Default options for specific types
            success: {
              duration: 3000,
              // theme: {
              //   primary: "green",
              //   secondary: "black",
              // },
            },
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
