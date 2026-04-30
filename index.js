export { getUsers, createUser, updateUser, deleteUser } from "./controllers.js";

const argv = process.argv;
const params = argv.slice(2);
const operacion = params[0];
let resultado;

// La variable "resultado" se reasigna según lo que retorna cada función
switch (operacion) {
  case "get":
    resultado = getUsers();
    break;
  case "add":
    resultado = createUser();
    break;
  case "update":
    resultado = updateUser();
    break;
  case "delete":
    resultado = deleteUser();
    break;
  default:
    resultado = "Operación inválida";
}

// Función "main" muestra en la consola el resultado y ejecuta todo
const main = () => {
  console.log(resultado);
};

main();
