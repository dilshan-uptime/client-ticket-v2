import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
import { TicketPage } from "../pages/TicketPage";

export const LOGIN = "/login";
export const SIGNUP = "/sign-up";
export const TICKET = "/ticket";

export const routes = [
  {
    path: LOGIN,
    component: LoginPage,
    isPrivate: false,
    permission: [],
  },
  {
    path: SIGNUP,
    component: SignUpPage,
    isPrivate: false,
    permission: [],
  },
  {
    path: TICKET,
    component: TicketPage,
    isPrivate: false,
    permission: [],
  },
];

export default routes;
