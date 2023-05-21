import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.scss';
import { Logo, Vector } from "../../assets"


const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const { email, password } = user

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login Submitted');
  }
  return (
    <div className='login'>
      <h1>
        <img src={Logo()} alt="" />lendsqr
      </h1>
      <div className="login__grid">
        <img src={Vector()} alt="" />
        <div className="login__form">
          <h1>
            Welcome!
          </h1>
          <p>Enter details to login.</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name='email' placeholder='Email' value={email} onChange={onChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name='password' placeholder='Password' value={password} onChange={onChange} />
            </div>
            <span>Forgot PASSWORD?</span>
            <Link to="/" className='submit'>Log In</Link>
            {/* <input type="submit" value="Log In" className='btn btn-primary btn-block' /> */}
          </form>
        </div>
      </div>


    </div>
  )
}

export default Login;