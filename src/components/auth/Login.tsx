import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.scss';
import { Logo, Vector } from "../../assets/"


const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const { email, password } = user
  const [inputType, setInputType] = useState("password");
  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text")
      return;
    }
    setInputType("password")
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login Submitted');
  }
  return (
    <div className='login'>
      <div className='left-grid'>
        <h1>
          <img src={Logo()} alt="" />lendsqr
        </h1>

        <img src={Vector()} alt="" className='vector' />
      </div>
      <div className="login__grid">
        <h1 className='mobile-logo'>
          <img src={Logo()} alt="" />lendsqr
        </h1>
        <div className="login__form">
          <h1>
            Welcome!
          </h1>
          <p>Enter details to login.</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="email" >Email</label>
              <input type="email" name='email' placeholder='Email' className='input' value={email} onChange={onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password" >Password</label>
              <input type={inputType} name="password" placeholder='Password' className='input' value={password} onChange={onChange} />
              <small onClick={togglePassword}>{inputType === 'password' ? 'Show' : 'Hide'}</small>
            </div>
            <span>Forgot PASSWORD?</span>
            <Link to="/" className='submit'>Log In</Link>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Login;