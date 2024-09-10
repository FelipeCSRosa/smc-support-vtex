import React, { useEffect, useState } from "react";
//@ts-ignore
import { useRenderSession } from "vtex.session-client";
//@ts-ignore
import type { SessionSuccess } from "vtex.session-client";
import { useMutation } from "react-apollo";
import classicSingIn from "../../graphql/classicSingIn.graphql";
import "./global.css";

const LoginCustom = () => {
  const [show, setShow] = useState(true);
  const [step, setStep] = useState("login");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const { loading: sessionLoading, session } = useRenderSession();

  useEffect(() => {
    if (!sessionLoading && session) {
      if ((session as SessionSuccess).namespaces?.profile?.email?.value)
        setShow(false);
    }
  }, [sessionLoading]);

  //@ts-ignore
  const [classicSingInMutation, { data, error: erroSignIn }] = useMutation(
    classicSingIn,
    {
      variables: {
        email: userEmail,
        password: userPassword,
      },
    }
  );

  if (data?.classicSignIn === "Success") {
    window.location.reload();
  }

  const handleLogin = () => {
    classicSingInMutation();
  };

  return (
    <>
      <div className={`login-custom-modal-backdrop ${!show && "dn"}`} />
      <div className={`login-custom-modal-container ${!show && "dn"}`}>
        <img
          src="https://t15903.vtexassets.com/arquivos/logo-smc-header.png"
          alt=""
          className="login-custom-modal-logo"
        />
        {step === "login" && (
          <>
            <div className="login-custom-modal-top">
              <form
                action=""
                className="login-custom-modal-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="E-mail"
                  value={userEmail}
                  onChange={(e) => setUserEmail((e.target as any).value)}
                />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Senha"
                  value={userPassword}
                  onChange={(e) => setUserPassword((e.target as any).value)}
                />
                <button>Entrar</button>
              </form>
              <p
                className="login-custom-modal-forgot-password"
                onClick={() => setStep("recover")}
              >
                Esqueceu a senha?
              </p>
            </div>
            <div className="login-custom-modal-bottom">
              <a className="login-custom-modal-dont-have-account">
                Não possui uma conta?
              </a>
              <p className="login-custom-modal-register">Registre-se</p>
            </div>
          </>
        )}
        {step === "recover" && (
          <div>
            <p className="login-custom-modal-recover-message">
              Por favor insira seu nome de usuário. Você receberá um link por
              e-mail que poderá usar para atribuir uma nova senha.
            </p>
            <form action="" className="login-custom-modal-form">
              <input type="text" name="" id="" placeholder="E-mail" />
              <button>Entrar</button>
            </form>
            <button
              className="login-custom-modal-button-cancel"
              onClick={() => setStep("login")}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginCustom;
