import { SsoLoginPage } from "../pages/SsoLoginPage";
import { HomePage } from "../pages/HomePage";
import { TicketPage } from "../pages/TicketPage";

export const LOGIN = "/";
export const HOME = "/home";
export const TICKET = "/ticket";

export const routes = [
  {
    path: LOGIN,
    component: SsoLoginPage,
    isPrivate: false,
    permission: [],
  },
  {
    path: HOME,
    component: HomePage,
    isPrivate: true,
    permission: [],
  },
  {
    path: TICKET,
    component: TicketPage,
    isPrivate: true,
    permission: [],
  },
];

export default routes;
