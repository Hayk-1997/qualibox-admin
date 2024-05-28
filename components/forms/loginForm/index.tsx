import React from "react";

const LoginForm: React.FC = (): React.JSX.Element => {
  return (
    <form className="row g-3 needs-validation">
      <div className="col-12">
        <label htmlFor="yourUsername" className="form-label">
          Username
        </label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">
            @
          </span>
          <input
            type="text"
            name="username"
            className="form-control"
            id="yourUsername"
          />
          <div className="invalid-feedback">Please enter your username.</div>
        </div>
      </div>
      <div className="col-12">
        <label htmlFor="yourPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="yourPassword"
        />
        <div className="invalid-feedback">Please enter your password!</div>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="remember"
            defaultValue="true"
            id="rememberMe"
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
