import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserLogin from "../global/useUserLogin";
import {
  Container,
  Form,
  Input,
  ErrorMessage,
  SubmitButton,
} from "../components/login/loginStyles";

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setIsLogged, setUser } = useUserLogin();
  const navigate = useNavigate();

  const onFinish = async (event) => {
    const { Email, Password } = event.target.elements;
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: Email.value,
          Password: Password.value,
        }),
      });

      if (!response.ok) {
        const data = await response.json();

        if (data.ERRORS) {
          setError(data.ERRORS.map((err) => err.msg));
        } else {
          setError([data.message || "An unexpected error occurred."]);
        }
      } else {
        const data = await response.json();
        setUser(data);
        setIsLogged(true);
        navigate("/products");
      }
    } catch (error) {
      console.log({ error });
      setError([error.message || "An unexpected error occurred."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={onFinish}>
        <h1>Login</h1>
        <Input
          type="email"
          name="Email"
          id="Email"
          placeholder="Enter your Email"
          required
        />
        <Input
          type="password"
          name="Password"
          id="Password"
          placeholder="Enter your Password"
          required
        />
        {error && (
          <div style={{ color: "red" }}>
            {error.map((err, index) => (
              <ErrorMessage key={index}>{err}</ErrorMessage>
            ))}
          </div>
        )}
        <>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Loading..." : "Log in"}
          </SubmitButton>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </>
      </Form>
    </Container>
  );
}

export default Login;
