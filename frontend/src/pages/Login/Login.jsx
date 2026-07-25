import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email,
        password,
      });

      login(data.access_token);

      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error:", err);
      console.error("Response:", err.response);

      alert(
        err.response?.data?.detail ||
          err.response?.data?.message ||
          err.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="login">
      <form onSubmit={submit}>
        <h1>DustNet AI</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}