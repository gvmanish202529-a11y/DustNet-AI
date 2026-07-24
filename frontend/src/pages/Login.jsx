import "./../styles/Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <h1 className="logo">DustNet AI</h1>

        <p className="subtitle">
          Industrial Rover Management Platform
        </p>

        <form>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button className="login-btn">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?
          <span> Register</span>
        </p>

      </div>
    </div>
  );
}

export default Login;