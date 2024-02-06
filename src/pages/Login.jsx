import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, token } = useContext(AuthContext);
  // const navigate = useNavigate();

  if (token) {
    return (
      <>
        <h1>Already logged in, baby</h1>
      </>
    );
  }

  function submitUser(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={submitUser}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group" style={{ marginTop: 10 }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
