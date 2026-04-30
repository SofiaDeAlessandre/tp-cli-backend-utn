import crypto from "node:crypto";
// Funciones que controlan lo que queremos llevar a cabo

const getUsers = () => {
  return "Obteniendo usuarios";
};

const createUser = (username, email, password) => {
  // Validación para que existan los datos ingresados y no estén vacíos
  if (!username || !email || !password) {
    return "Todos los campos son obligatorios: debes enviar username, email y password para registrar un usuario";
  }

  // Validación para que "username" contenga sólo caracteres de "a" a "z" y no posea números
  const usernameValido = /^[a-zA-Z]+$/.test(username);
  if (!usernameValido) {
    return "Username sólo debe contener letras (sin números)";
  }

  // Validación para que "email" termine en @gmail.com
  if (!email.endsWith("@gmail.com")) {
    return "El email debe finalizar con @gmail.com";
  }

  // Validación para que "password" poseea máximo 8 caracteres y al menos una mayúscula
  const tieneMayuscula = /[A-Z]/.test(password);
  if (password.length > 8 || !tieneMayuscula) {
    return "La contraseña debe tener al menos una mayúscula y máximo 8 caracteres";
  }

  const newUser = {
    id: crypto.randomUUID(),
    username: username,
    email: email,
    password: password,
  };
  return newUser;
};

const updateUser = (id, updates) => {
  return "Usuario actualizado";
};

const deleteUser = (id) => {
  return "Usuario borrado";
};

export { getUsers, createUser, updateUser, deleteUser };
