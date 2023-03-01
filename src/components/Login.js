import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  provider
} from '../firebase/config';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLogin = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const onClickGoogle = () => {

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigate("/home");
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const onClickSignUp = () => {
    navigate("/signup")
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
            placeholder="Email address" 
            className="input input-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            
          <input 
            type="passwor
            d" 
            id="password" 
            placeholder="Password" 
            className="input input-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input 
            type="submit" 
            value="Ingresar" 
            id ="login-button" 
            className="primary-button login-button"/>
        </form>

        <div 
        className="icon-container"
        >
          <button 
            id='gmailIcon' 
            className="gmailButton"
            onClick={onClickGoogle}
          > 
            <img 
              src="https://sugope.vteximg.com.br/arquivos/iconGoogle.svg?v=637677744074800000" 
              title="Ingresa con Google" alt='' 
            />
            Ingresa con Google 
          </button>
        </div>
          <p 
          className="login-register-text">
            Don't have an account?
          </p>
          <button 
          className="link" 
          id="registrate"
          onClick={onClickSignUp}
          > 
            Sign up
          </button>
      </div>
    </div>
  )
};

export { Login };