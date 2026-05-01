import { db } from "./config.js";
import crypto from "node:crypto";
import bcrypt from "bcrypt";

// Funciones que controlan "La lógica de negocio":

// Función para obtener todos los usuarios
const getUsers = async () => {
  const q = `SELECT * FROM users`; // Sentencia SQL
  const [response] = await db.query(q); // Devuelve un array, se realiza destructuring para obtener "response"
  if (response.length === 0) {
    // Validación por si el array devuelto no posee usuarios
    return "No se encontraron usuarios";
  }

  return response;
};

// Función para crear un usuario
const createUser = async (username, email, password) => {
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

  // Validación regex para que "password" tenga máximo 8 caracteres y al menos una mayúscula
  const tieneMayuscula = /[A-Z]/.test(password);
  if (password.length > 8 || !tieneMayuscula) {
    return "La contraseña debe tener al menos una mayúscula y máximo 8 caracteres";
  }

const hashedPassword = await bcrypt.hash(password, 10);

const q = `INSERT INTO users (id, username, email, password) VALUES (?,?,?,?)`;

const [response] = await db.query(q, [
  crypto.randomUUID(),
  username,
  email,
  hashedPassword
]); // Devuelve un array, por ese motivo se realiza destructuring

  if (response.affectedRows === 1) {
    return "Usuario creado exitosamente";
  }

  return "Error al crear usuario";
};

// Función para actualizar un usuario específico mediante su ID
const updateUser = async (id, updates) => {
  if (!id) {
    // Validación para que se ingrese el ID del usuario requerido
    return "ID requerido";
  }
  const q = `UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`;
  const { username, email, password } = updates;

let hashedPassword = password;

if (password) {
  hashedPassword = await bcrypt.hash(password, 10);
}

const [response] = await db.query(q, [
  username,
  email,
  hashedPassword,
  id
]);

  if (response.affectedRows === 0) {
    return "Usuario no encontrado";
  }
  return "Usuario actualizado con éxito";
};

// Función para eliminar un usuario específico mediante su ID
const deleteUser = async (id) => {
  const q = `DELETE from users WHERE id = ?`;
  // Validación para solicitar el ID del usuario a eliminar
  if (!id) {
    return "Se requiere un ID";
  }
  const [response] = await db.query(q, [id]);

  if (response.affectedRows === 0) {
    return "Usuario no encontrado";
  }

  return "Usuario borrado con éxito";
};

export { getUsers, createUser, updateUser, deleteUser };
