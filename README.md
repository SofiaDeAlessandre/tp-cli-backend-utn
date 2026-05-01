#  CLI de Gestión de Usuarios con Node.js y MySQL 

Aplicación de línea de comandos (CLI) desarrollada en Node.js que permite gestionar usuarios mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar), utilizando una base de datos relacional MySQL.

---

## 📌 Características

- Gestión de usuarios desde la terminal
- Operaciones CRUD completas
- Validaciones de datos
- Conexión a base de datos MySQL
- Código modularizado
- Uso de async/await
- Encriptación de contraseñas con bcrypt 🔐

---

## 🗂️ Estructura del proyecto

```
📁 proyecto
├── index.js         # Punto de entrada que ejecuta el sistema (CLI)
├── controllers.js   # Lógica de negocio (CRUD)
├── config.js        # Conexión a MySQL
├── dataBase.sql     # Script de base de datos
└── package.json
```

---

## ⚙️ Requisitos

- Node.js instalado
- npm (incluido con Node)
- MySQL instalado
- XAMPP instalado y en ejecución

📌 Importante:  
Para que la base de datos funcione correctamente, deben estar activos los servicios de **Apache y MySQL en XAMPP**, ya que permiten la conexión y gestión de la base de datos.

---

## 🔧 Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/SofiaDeAlessandre/tp-cli-backend-utn.git
cd tp-gestion-usuarios
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear la base de datos:

```bash
mysql -u root -p < dataBase.sql
```

---

## 🗄️ Base de datos

```sql
CREATE DATABASE cli_crud;

USE cli_crud;

CREATE TABLE users (
  id VARCHAR(100) PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);
```

📌 Se crea una base llamada `cli_crud` con una tabla `users`:

- id (VARCHAR, clave primaria)
- username (VARCHAR)
- email (VARCHAR)
- password (VARCHAR)

---

## 🚀 Uso de la aplicación

### 📥 Obtener usuarios

```bash
node index.js get
```

---

### ➕ Crear usuario

```bash
node index.js add <username> <email> <password>
```

✔ Validaciones:
- Todos los campos son obligatorios
- El email debe terminar en `@gmail.com`
- El username solo puede contener letras
- La contraseña debe tener al menos una mayúscula y máximo 8 caracteres

---

### ✏️ Actualizar usuario

```bash
node index.js update <username> <email> <password> <id>
```

---

### ❌ Eliminar usuario

```bash
node index.js delete <id>
```

---

## ⚠️ Manejo de errores

La aplicación contempla:

- Validación de datos de entrada
- Errores de base de datos
- Usuario no encontrado
- Parámetros faltantes

---

## 📊 Ejemplo de salida

```

node index.js get

┌─────┬────────┬────────┬────────────────────┬───────────────┐
│ id  │ juan   │ juan@gmail.com │ $2b$10$... │
└─────┴────────┴────────┴────────────────────┴───────────────┘
```

---

## 🔐 Seguridad de contraseñas (bcrypt)

Este proyecto implementa **bcrypt** para la encriptación de contraseñas.

Esto significa que las contraseñas **no se almacenan en texto plano**, sino como un hash seguro.

### 🧪 Ejemplo en base de datos:

```
$2b$10$zhC6H6WydzbDRu9PCwMzcucBrbniY9lrHCJ58fFgdSQ...
```

### 🧠 Beneficios:

- Mayor seguridad de datos
- Protección de credenciales
- Buenas prácticas de backend

---

## 🧠 Tecnologías utilizadas

- Node.js
- MySQL
- mysql2
- bcrypt

---
## Notas:
Este trabajo fue realizado como práctica para entender cómo funciona Node.js con bases de datos MySQL.

## 👨‍💻 Autor

Sofía De Alessandre  
Abril 2026

---



