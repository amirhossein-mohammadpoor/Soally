import CRM from "../views/CRM"
import InstallBanner from "../views/InstallBanner/InstallBanner"
import NotFound from "../views/NotFound"

const routes = [
  {
    exact: true,
    path: "/",
    component: CRM,
  },
  {
    path: "/install_banner",
    component: InstallBanner,
  },
  {
    exact: false,
    path: "",
    component: NotFound
  }
]

export default routes;