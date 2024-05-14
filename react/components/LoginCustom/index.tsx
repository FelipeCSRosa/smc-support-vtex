import React, { useState } from "react";
import "./global.css";

const LoginCustom = () => {
  const [step, setStep] = useState("login");

  return (
    <>
      <div className="login-custom-modal-backdrop" />
      <div className="login-custom-modal-container">
        <img
          src="https://t15903.vtexassets.com/arquivos/logo-smc-header.png"
          alt=""
          className="login-custom-modal-logo"
        />
        {step === "login" && (
          <>
            <div className="login-custom-modal-top">
              <form action="" className="login-custom-modal-form">
                <input type="text" name="" id="" placeholder="E-mail" />
                <input type="text" name="" id="" placeholder="Senha" />
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
