import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  function onSubmitLogin(e) {
    e.preventDefault();
    navigate("/home");
  }
  

  return (
    <div id="loginDiv" className="login-container">
      <div className="logo-title-container">
        <div className="logo-circle">
          <p className="logo-title">
            Social Context
          </p>
        </div>
      </div>

      <div className="form-container">
        <p className="description">
          Ingresa tus datos
        </p>

        <form 
          className="form" 
          id="form"
          onSubmit={onSubmitLogin}
        >
          <input 
            type="email" 
            id="email" 
            placeholder="Correo electrónico" 
            className="input input-email" 
          />
            
          <input 
            type="passwor
            d" 
            id="password" 
            placeholder="Contraseña" 
            className="input input-password" 
          />

          <input 
            type="submit" 
            value="Ingresar" 
            id ="login-button" 
            className="primary-button login-button"/>
        </form>

        <section 
          className="icon-container">
          <button 
            id='gmailIcon' 
            className="gmailButton"
          > 
            <img 
              src="https://sugope.vteximg.com.br/arquivos/iconGoogle.svg?v=637677744074800000" 
              title="Ingresa con Google" alt='' 
            />
            Ingresa con Google 
          </button>
        </section>
          <p className="login-register-text">¿No tienes una cuenta? <a className="link" id="registrate" href="#/registro"> Regístrate</a></p>
      </div>
    </div>
  )
};

export { Login };