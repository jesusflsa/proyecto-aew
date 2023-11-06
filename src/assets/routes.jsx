import Inicio from "../pages/inicio";
import Catalogo from "../pages/Catalogo";
import Soporte from "../pages/soporte";
import Pagar from "../pages/pagar";
import Cuenta from "../pages/cuenta";

const routes = [
  {
    name: "Inicio",
    path: "/",
    component: <Inicio />,
  },
  {
    name: "Catalogo",
    path: "/catalogo",
    component: <Catalogo />,
  },
  {
    name: "Soporte",
    path: "/soporte",
    component: <Soporte />,
  },
  {
    name: "Pagar",
    path: "/pagar",
    component: <Pagar />,
  },
  {
    name: "Cuenta",
    path: "/cuenta",
    component: <Cuenta />,
  },
];

export default routes;