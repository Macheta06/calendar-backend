/*  
    Rutas de usuarios / Auth
    host + api/auth
*/

const { Router } = require("express");
const router = Router();
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");

router.post("/", crearUsuario);

router.post("/new", loginUsuario);

router.get("/renew", revalidarToken);

module.exports = router;
