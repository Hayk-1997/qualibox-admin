import { ReactElement, useCallback } from 'react';
import AuthPageLayout from '../../layout/admin/authPageLayout';
import Input from '../../formElements/input';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { TAdminLoginForm } from '../../types/auth/admin';
import { adminLoginRequest } from '../../slices/authSlice';

type FormValues = {
  email: string;
  password: string;
};

const Login = (): JSX.Element => {
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = useCallback(
    (data: FormValues): void => {
      dispatch(adminLoginRequest(data as TAdminLoginForm));
    },
    [dispatch]
  );

  return (
    <div className="row h-100 align-content-sm-center">
      <div className="col-md-6 m-0-auto">
        <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body">
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <Input
                  control={control}
                  rules={{ required: true }}
                  withError={true}
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <Input
                  control={control}
                  rules={{ required: true }}
                  withError={true}
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-sm-2 col-sm-10">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-info">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthPageLayout>{page}</AuthPageLayout>;
};

export default Login;
