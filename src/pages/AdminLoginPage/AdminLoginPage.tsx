import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // On successfull login, redirect to the admin page
    
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/admin");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to log in.");
      })
  }

  return (
    <main>
      <h2>Admin Login</h2>
      <form className="admin-login-form" onSubmit={handleLogin}>
        <label >
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" required />
        </label>
        <label >
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" required />
        </label>
        <input type="Submit" value="Login" readOnly />
      </form>
    </main>
  )
}

export default AdminLoginPage;