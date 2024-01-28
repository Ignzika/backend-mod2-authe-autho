 const ERRORS = [
  { code: "auth_01", status: 400, message: "el usuario no existe" },
  { code: "auth_02", status: 400, message: "contraseña invalida" },
  { code: "auth_03", status: 401, message: "el token debe estar presente" },
  { code: "auth_04", status: 401, message: "el token no es valido" },
];


export default ERRORS;