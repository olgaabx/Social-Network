import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from '../firebase/config';

function SignUp() {
  const navigate = useNavigate();
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLogin = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line no-unused-vars
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  

  return (
      <div className="form-container form-container-register">
        <h1 className="title-register">Create your account</h1>

        <form 
        className="form"
        id="form-register"
        onSubmit={onSubmitLogin}
        >
          <div className="input-container">
            {/* <input 
            type="text" 
            id="name" 
            placeholder="Nombre" 
            className="input input-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
            /> */}

            <input 
            type="email" 
            id="email" 
            placeholder="Correo electrónico" 
            className="input input-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            />
            <input 
            type="password" 
            id="password" 
            placeholder="Contraseña" 
            className="input input-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            />
          </div>

          <button 
          type="submit" 
          value="Regístrate" 
          id ="register-button" 
          className="primary-button register-button" 
          />
        </form>

        <p 
        className="login-register-text"
        >
          ¿Ya tienes una cuenta? 
          <br/>
        <a 
        className="link" 
        id="inicia" 
        href="#/inicio"
        >
          Inicia sesión
        </a>
        </p>
          
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
      </div>
  );
};

export { SignUp };