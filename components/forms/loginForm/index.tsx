"use client";

import React, { useCallback } from "react";
import loginSchema from "@/validationSchemas/loginSchema";
import { TUserLoginForm } from "@/types/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useSelectUserLogin } from "@/lib/features/authSlice/selectors";
import { shallowEqual } from "react-redux";
import { makeUserLoginRequest } from "@/lib/features/authSlice/service";
import InputWithValidation from "@/components/molecules/inputWithValidation";

const LoginForm: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(useSelectUserLogin, shallowEqual);

  console.log("user", user);

  const { handleSubmit, control } = useForm<TUserLoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = useCallback(
    (data: TUserLoginForm): void => {
      dispatch(makeUserLoginRequest(data));
    },
    [dispatch],
  );

  return (
    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-12">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <div className="input-group">
          <InputWithValidation
            name="email"
            placeholder="Enter you email address here..."
            id="email"
            control={control}
            withError={true}
          />
          <div className="invalid-feedback">Please enter your username.</div>
        </div>
      </div>
      <div className="col-12">
        <label htmlFor="yourPassword" className="form-label">
          Password
        </label>
        <InputWithValidation
          type="password"
          name="password"
          id="password"
          control={control}
          withError={true}
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
