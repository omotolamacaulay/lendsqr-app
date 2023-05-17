import { useState } from 'react'

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
    <div className='form-container'>
      <img src="../../../login-img.svg" alt="" />
      <h1>
        Welcome!
      </h1>
      <p>Enter details to login.</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name='email' value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name='password' value={password} onChange={onChange} />
        </div>
        <input type="submit" value="Log In" className='btn btn-primary btn-block' />
      </form>
    </div>
  )
}

export default Login;