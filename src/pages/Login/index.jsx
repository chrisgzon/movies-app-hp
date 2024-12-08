import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { MDBInput } from "mdb-react-ui-kit";
import useAuth from "hooks/useAuth";

const Login = () => {
  const { email, setEmail, password, setPassword, handleLogin } = useAuth();

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Iniciar Sesion
                    </h2>
                    <p className="text-white-50 mb-5">
                      Por favor ingrese su correo y contraseña!
                    </p>

                    <form onSubmit={handleLogin}>
                      <div
                        data-mdb-input-init
                        className="form-outline form-white mb-4"
                      >
                        <MDBInput
                          type="email"
                          wrapperClass="mb-4"
                          label="Correo Electronico"
                          value={email}
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div
                        data-mdb-input-init
                        className="form-outline form-white mb-4"
                      >
                        <MDBInput
                          type="password"
                          wrapperClass="mb-4"
                          label="Contraseña"
                          value={password}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Iniciar Sesion
                      </button>
                    </form>
                  </div>

                  <div>
                    <p className="mb-0">
                      ¿No tiene una cuenta?{" "}
                      <Link to={"/signup"} className="text-white-50 fw-bold">
                        Registrarse
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
