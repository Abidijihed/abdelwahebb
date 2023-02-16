import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
const token =localStorage.getItem("token")
export var routes=[]
if (token !== "undefined") {
  routes = [
    {
      icon: HomeIcon,
      name: "home",
      path: "/",
      element: <Home />,
    },
    // {
    //   icon: UserCircleIcon,
    //   name: "profile",
    //   path: "/profile",
    //   element: <Profile />,
    // },
    // {
    //   icon: ArrowRightOnRectangleIcon,
    //   name: "Sign In",
    //   path: "/sign-in",
    //   element: <SignIn />,
    // },
    // {
    //   icon: UserPlusIcon,
    //   name: "Sign Up",
    //   path: "/sign-up",
    //   element: <SignUp />,
    // },
    // {
    //   icon: DocumentTextIcon,
    //   name: "Docs",
    //   href: "https://www.material-tailwind.com/docs/react/installation",
    //   target: "_blank",
    //   element: "",
    // },
  ];
} else {
  routes = [
    {
      icon: HomeIcon,
      name: "home",
      path: "/",
      element: <Home />,
    },
    // {
    //   icon: UserCircleIcon,
    //   name: "profile",
    //   path: "/profile",
    //   element: <Profile />,
    // },
    {
      icon: ArrowRightOnRectangleIcon,
      name: "Sign In",
      path: "/sign-in",
      element: <SignIn />,
    },
    // {
    //   icon: UserPlusIcon,
    //   name: "Sign Up",
    //   path: "/sign-up",
    //   element: <SignUp />,
    // },
    // {
    //   icon: DocumentTextIcon,
    //   name: "Docs",
    //   href: "https://www.material-tailwind.com/docs/react/installation",
    //   target: "_blank",
    //   element: "",
    // },
  ];
}
 


export default routes;
