//enum
// enumerar los valores de un conjunto de datos
// pasar labels a una UI
// evaluar casos

enum Role {
  Student,
  Director = 20,
  Teacher,
  Admin,
}

enum LoadState {
  Loading,
  Loaded,
}

enum Auth {
  login = "Login",
  logout = "Logout",
  register = "Register",
  recoverPassword = "Recover Password",
}


const MyComponent = () => {
  const handleClick = (type: Auth) => {
    switch (type) {
      case Auth.login:
        console.log("login");
        break;
      case Auth.logout:
        console.log("logout");
        break;
      case Auth.register:
        console.log("register");
        break;
      case Auth.recoverPassword:
        console.log("recoverPassword");
        break;
      default:
        break;
    }
  }
  return (
    <>
      <button onClick={() => handleClick(Auth.login)}>{Auth.login}</button>
      <button>{Auth.logout}</button>
      <button>{Auth.register}</button>
      <button>{Auth.recoverPassword}</button>
    </>
  );
}

console.log(Role.Student); // 0
