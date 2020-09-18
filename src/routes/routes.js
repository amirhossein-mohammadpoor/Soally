import React from "react"
import CRM from "../views/CRM"
import NotFound from "../views/NotFound"
const InstallBanner = React.lazy(() => import("../views/InstallBanner/InstallBanner"))

const routes = [
  {
    exact: true,
    path: "/",
    component: CRM,
  },
  {
    exact: true,
    path: "/install_banner",
    component: InstallBanner,
    lazy: true
  },
  {
    exact: false,
    path: "*",
    component: NotFound
  }
]

export default routes;