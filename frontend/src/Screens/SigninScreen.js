import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../actions/userActions";

function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispath = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = e => {
    e.preventDefault();
    dispath(signin(email, password));
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Sign-in</h2>
          </li>
          <li>
            {loading && <div>Loading ...</div>}
            {error && <div>Error ...</div>}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={e => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="button primary">
              Signin
            </button>
          </li>
          <li>New to Amazona ?</li>
          <li>
            <Link to="/register" className="button secondary text-center">
              Create your amazona account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SigninScreen;
