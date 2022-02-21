const bcrypt = require("bcrypt");

(async () => {
  const encryptedPassword = await bcrypt.hash("1234", 10);
  console.log(encryptedPassword); // --> cuantas veces aplica el algoritmo a la contraseña. Devuelve una promesa.
})();
