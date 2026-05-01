import { getUsers, createUser, updateUser, deleteUser } from "./controllers.js";

const argv = process.argv;
const params = argv.slice(2);
const operacion = params[0];
let resultado;

// La variable "resultado" se reasigna según lo que retorna cada función

switch (operacion) {
  case "get":
    resultado = await getUsers();
    break;
  case "add":
    resultado = await createUser(params[1], params[2], params[3]);
    break;
  case "update":
    const updates = {
      username: params[1],
      email: params[2],
      password: params[3],
    };
    resultado = await updateUser(params[4], updates);
    break;
  case "delete":
    resultado = await deleteUser(params[1]);
    break;
  default:
    resultado = "Operación inválida";
}

// Función "main" muestra en la consola el resultado y ejecuta todo
const main = () => {
  console.log(resultado);
};

main();
