const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const router = Router();

//Todas pasan por la validación del token
router.use(validarJWT);

//Obtener eventos
router.get("/", getEventos);

//Crear un nuevo evento
router.post(
  "/",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatorio").custom(isDate),
    check("end", "Fecha de inicio es obligatorio").custom(isDate),
    // check('title', 'El título es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  validarCampos,
  crearEvento,
);

//Actualizar evento
router.put(
  "/:id",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatorio").custom(isDate),
    check("end", "Fecha de inicio es obligatorio").custom(isDate),
    // check('title', 'El título es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  actualizarEvento,
);

//Borrar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
