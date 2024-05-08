import React, { MouseEvent, useEffect, useState } from "react";
import { canUseDOM } from "vtex.render-runtime";
import "./global.css";

const Table = () => {
  const [showPriceDetails, setShowPriceDetails] = useState(false);
  const [priceDetailsPostion, setPriceDetailsPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const handleClick = () => {
      setShowPriceDetails(false);
    };

    if (canUseDOM) {
      window.addEventListener("click", handleClick);
    }

    return () => {
      if (canUseDOM) {
        window.removeEventListener("click", handleClick);
      }
    };
  }, [canUseDOM]);

  const handlePriceDetails = (e: MouseEvent) => {
    e.stopPropagation();
    const button = e.target as HTMLButtonElement;
    const postion = button.getClientRects();
    setPriceDetailsPosition({
      top: postion[0].top,
      left: postion[0].left,
    });
    setShowPriceDetails(true);
  };

  return (
    <>
      <PriceDetails
        show={showPriceDetails}
        setShow={setShowPriceDetails}
        postion={priceDetailsPostion}
      />
      <div className="table-wrapper">
        <div className="table-container">
          <div className="table-header">
            <div className="table-header-item table-item-selected" />
            <div className="table-header-item table-item-quantity">
              Quantidade
            </div>
            <div className="table-header-item table-item-code">Produto</div>
            <div className="table-header-item table-item-partnumber">
              SMC (Partnumber)
            </div>
            <div className="table-header-item table-item-description">
              Descrição Partnumber SMC
            </div>
            <div className="table-header-item table-item-measurement">
              Un. Medida
            </div>
            <div className="table-header-item table-item-deadline">
              Prazo de Entrega
            </div>
            <div className="table-header-item table-item-price">
              Preço Unitário. Sem IPI,ST - R$
            </div>
            <div className="table-header-item table-item-total">Total R$ </div>
            <div className="table-header-item table-item-buttons" />
          </div>
          <div className="table-body">
            <div className="table-row">
              <div className="table-row-item table-item-selected">
                {true ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00033 0.666626C6.54993 0.666626 5.13211 1.09672 3.92615 1.90252C2.72019 2.70831 1.78025 3.85362 1.22521 5.19361C0.67017 6.53361 0.524945 8.00809 0.807903 9.43062C1.09086 10.8531 1.78929 12.1598 2.81488 13.1854C3.84046 14.211 5.14714 14.9094 6.56967 15.1924C7.99219 15.4753 9.46668 15.3301 10.8067 14.7751C12.1467 14.22 13.292 13.2801 14.0978 12.0741C14.9036 10.8682 15.3337 9.45036 15.3337 7.99996C15.3337 6.05504 14.561 4.18978 13.1858 2.81451C11.8105 1.43924 9.94525 0.666626 8.00033 0.666626ZM11.805 6.47129L7.13833 11.138C7.01331 11.2629 6.84377 11.3332 6.667 11.3332C6.49022 11.3332 6.32068 11.2629 6.19566 11.138L4.19566 9.13796C4.07422 9.01222 4.00703 8.84382 4.00855 8.66903C4.01006 8.49423 4.08018 8.32702 4.20378 8.20341C4.32739 8.07981 4.4946 8.0097 4.66939 8.00818C4.84419 8.00666 5.01259 8.07385 5.13833 8.19529L6.667 9.72396L10.8623 5.52863C10.9881 5.40719 11.1565 5.33999 11.3313 5.34151C11.5061 5.34303 11.6733 5.41314 11.7969 5.53675C11.9205 5.66035 11.9906 5.82756 11.9921 6.00236C11.9936 6.17716 11.9264 6.34556 11.805 6.47129Z"
                      fill="#378747"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 8.49178C15.5 12.5537 12.15 15.8606 8 15.8606C3.85004 15.8606 0.5 12.5537 0.5 8.49178C0.5 4.42983 3.85004 1.12292 8 1.12292C12.15 1.12292 15.5 4.42983 15.5 8.49178Z"
                      fill="#FAFAFA"
                      stroke="#DDDDDD"
                    />
                  </svg>
                )}
              </div>
              <div className="table-row-item table-row-item-quantity table-item-quantity">
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15.4687C3.875 15.4687 0.53125 12.125 0.53125 8C0.53125 3.875 3.875 0.53125 8 0.53125C12.125 0.53125 15.4688 3.875 15.4688 8C15.4688 12.125 12.125 15.4687 8 15.4687ZM8 1.34375C4.34375 1.34375 1.34375 4.34375 1.34375 8C1.34375 11.6562 4.34375 14.6562 8 14.6562C11.6562 14.6562 14.6562 11.6562 14.6562 8C14.6562 4.34375 11.6562 1.34375 8 1.34375Z"
                      fill="black"
                    />
                    <path
                      d="M4.03125 7.5625H11.9688V8.4375H4.03125V7.5625Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <input type="number" name="" id="" />
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15.4687C3.875 15.4687 0.53125 12.125 0.53125 8C0.53125 3.875 3.875 0.53125 8 0.53125C12.125 0.53125 15.4688 3.875 15.4688 8C15.4688 12.125 12.125 15.4687 8 15.4687ZM8 1.34375C4.34375 1.34375 1.34375 4.34375 1.34375 8C1.34375 11.6562 4.34375 14.6562 8 14.6562C11.6562 14.6562 14.6562 11.6562 14.6562 8C14.6562 4.34375 11.6562 1.34375 8 1.34375Z"
                      fill="black"
                    />
                    <path
                      d="M4.03125 7.5625H11.9688V8.4375H4.03125V7.5625Z"
                      fill="black"
                    />
                    <path
                      d="M7.5625 4.03125H8.4375V11.9688H7.5625V4.03125Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <div className="table-row-item table-item-code">838051</div>
              <div className="table-row-item table-item-partnumber">
                KQ2E08-00A
              </div>
              <div className="table-row-item table-item-description">
                Conexão Instantanea reta de latao - Pacote com 10
              </div>
              <div className="table-row-item table-item-measurement">
                Metros
              </div>
              <div className="table-row-item table-item-deadline">
                15/01/2024
              </div>
              <div className="table-row-item table-row-item-price table-item-price">
                <span>12,11</span>
                <button onClick={(e) => handlePriceDetails(e)}>
                  Detalhar Preço
                </button>
              </div>
              <div className="table-row-item table-row-item-total table-item-total">
                121,10
              </div>
              <div className="table-row-item table-item-buttons">
                <button className="add-to-cart">Adicionar ao Carrinho</button>
                <button className="technical-infos">
                  Informações Técnicas
                </button>
              </div>
            </div>
            <div className="table-row">
              <div className="table-row-item table-item-selected">
                {true ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00033 0.666626C6.54993 0.666626 5.13211 1.09672 3.92615 1.90252C2.72019 2.70831 1.78025 3.85362 1.22521 5.19361C0.67017 6.53361 0.524945 8.00809 0.807903 9.43062C1.09086 10.8531 1.78929 12.1598 2.81488 13.1854C3.84046 14.211 5.14714 14.9094 6.56967 15.1924C7.99219 15.4753 9.46668 15.3301 10.8067 14.7751C12.1467 14.22 13.292 13.2801 14.0978 12.0741C14.9036 10.8682 15.3337 9.45036 15.3337 7.99996C15.3337 6.05504 14.561 4.18978 13.1858 2.81451C11.8105 1.43924 9.94525 0.666626 8.00033 0.666626ZM11.805 6.47129L7.13833 11.138C7.01331 11.2629 6.84377 11.3332 6.667 11.3332C6.49022 11.3332 6.32068 11.2629 6.19566 11.138L4.19566 9.13796C4.07422 9.01222 4.00703 8.84382 4.00855 8.66903C4.01006 8.49423 4.08018 8.32702 4.20378 8.20341C4.32739 8.07981 4.4946 8.0097 4.66939 8.00818C4.84419 8.00666 5.01259 8.07385 5.13833 8.19529L6.667 9.72396L10.8623 5.52863C10.9881 5.40719 11.1565 5.33999 11.3313 5.34151C11.5061 5.34303 11.6733 5.41314 11.7969 5.53675C11.9205 5.66035 11.9906 5.82756 11.9921 6.00236C11.9936 6.17716 11.9264 6.34556 11.805 6.47129Z"
                      fill="#378747"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 8.49178C15.5 12.5537 12.15 15.8606 8 15.8606C3.85004 15.8606 0.5 12.5537 0.5 8.49178C0.5 4.42983 3.85004 1.12292 8 1.12292C12.15 1.12292 15.5 4.42983 15.5 8.49178Z"
                      fill="#FAFAFA"
                      stroke="#DDDDDD"
                    />
                  </svg>
                )}
              </div>
              <div className="table-row-item table-row-item-quantity table-item-quantity">
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15.4687C3.875 15.4687 0.53125 12.125 0.53125 8C0.53125 3.875 3.875 0.53125 8 0.53125C12.125 0.53125 15.4688 3.875 15.4688 8C15.4688 12.125 12.125 15.4687 8 15.4687ZM8 1.34375C4.34375 1.34375 1.34375 4.34375 1.34375 8C1.34375 11.6562 4.34375 14.6562 8 14.6562C11.6562 14.6562 14.6562 11.6562 14.6562 8C14.6562 4.34375 11.6562 1.34375 8 1.34375Z"
                      fill="black"
                    />
                    <path
                      d="M4.03125 7.5625H11.9688V8.4375H4.03125V7.5625Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <input type="number" name="" id="" />
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15.4687C3.875 15.4687 0.53125 12.125 0.53125 8C0.53125 3.875 3.875 0.53125 8 0.53125C12.125 0.53125 15.4688 3.875 15.4688 8C15.4688 12.125 12.125 15.4687 8 15.4687ZM8 1.34375C4.34375 1.34375 1.34375 4.34375 1.34375 8C1.34375 11.6562 4.34375 14.6562 8 14.6562C11.6562 14.6562 14.6562 11.6562 14.6562 8C14.6562 4.34375 11.6562 1.34375 8 1.34375Z"
                      fill="black"
                    />
                    <path
                      d="M4.03125 7.5625H11.9688V8.4375H4.03125V7.5625Z"
                      fill="black"
                    />
                    <path
                      d="M7.5625 4.03125H8.4375V11.9688H7.5625V4.03125Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <div className="table-row-item table-item-code">838051</div>
              <div className="table-row-item table-item-partnumber">
                KQ2E08-00A
              </div>
              <div className="table-row-item table-item-description">
                Conexão Instantanea reta de latao - Pacote com 10
              </div>
              <div className="table-row-item table-item-measurement">
                Metros
              </div>
              <div className="table-row-item table-item-deadline">
                15/01/2024
              </div>
              <div className="table-row-item table-row-item-price table-item-price">
                <span>12,11</span>
                <button onClick={(e) => handlePriceDetails(e)}>
                  Detalhar Preço
                </button>
              </div>
              <div className="table-row-item table-row-item-total table-item-total">
                121,10
              </div>
              <div className="table-row-item table-item-buttons">
                <button className="add-to-cart">Adicionar ao Carrinho</button>
                <button className="technical-infos">
                  Informações Técnicas
                </button>
              </div>
            </div>
            <div className="table-row">
              <div className="table-row-item table-item-selected">
                {true ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00033 0.666626C6.54993 0.666626 5.13211 1.09672 3.92615 1.90252C2.72019 2.70831 1.78025 3.85362 1.22521 5.19361C0.67017 6.53361 0.524945 8.00809 0.807903 9.43062C1.09086 10.8531 1.78929 12.1598 2.81488 13.1854C3.84046 14.211 5.14714 14.9094 6.56967 15.1924C7.99219 15.4753 9.46668 15.3301 10.8067 14.7751C12.1467 14.22 13.292 13.2801 14.0978 12.0741C14.9036 10.8682 15.3337 9.45036 15.3337 7.99996C15.3337 6.05504 14.561 4.18978 13.1858 2.81451C11.8105 1.43924 9.94525 0.666626 8.00033 0.666626ZM11.805 6.47129L7.13833 11.138C7.01331 11.2629 6.84377 11.3332 6.667 11.3332C6.49022 11.3332 6.32068 11.2629 6.19566 11.138L4.19566 9.13796C4.07422 9.01222 4.00703 8.84382 4.00855 8.66903C4.01006 8.49423 4.08018 8.32702 4.20378 8.20341C4.32739 8.07981 4.4946 8.0097 4.66939 8.00818C4.84419 8.00666 5.01259 8.07385 5.13833 8.19529L6.667 9.72396L10.8623 5.52863C10.9881 5.40719 11.1565 5.33999 11.3313 5.34151C11.5061 5.34303 11.6733 5.41314 11.7969 5.53675C11.9205 5.66035 11.9906 5.82756 11.9921 6.00236C11.9936 6.17716 11.9264 6.34556 11.805 6.47129Z"
                      fill="#378747"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 8.49178C15.5 12.5537 12.15 15.8606 8 15.8606C3.85004 15.8606 0.5 12.5537 0.5 8.49178C0.5 4.42983 3.85004 1.12292 8 1.12292C12.15 1.12292 15.5 4.42983 15.5 8.49178Z"
                      fill="#FAFAFA"
                      stroke="#DDDDDD"
                    />
                  </svg>
                )}
              </div>
              <div className="table-row-item table-row-item-quantity table-item-quantity">
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15.4687C3.875 15.4687 0.53125 12.125 0.53125 8C0.53125 3.875 3.875 0.53125 8 0.53125C12.125 0.53125 15.4688 3.875 15.4688 8C15.4688 12.125 12.125 15.4687 8 15.4687ZM8 1.34375C4.34375 1.34375 1.34375 4.34375 1.34375 8C1.34375 11.6562 4.34375 14.6562 8 14.6562C11.6562 14.6562 14.6562 11.6562 14.6562 8C14.6562 4.34375 11.6562 1.34375 8 1.34375Z"
                      fill="black"
                    />
                    <path
                      d="M4.03125 7.5625H11.9688V8.4375H4.03125V7.5625Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <input type="number" name="" id="" />
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15.4687C3.875 15.4687 0.53125 12.125 0.53125 8C0.53125 3.875 3.875 0.53125 8 0.53125C12.125 0.53125 15.4688 3.875 15.4688 8C15.4688 12.125 12.125 15.4687 8 15.4687ZM8 1.34375C4.34375 1.34375 1.34375 4.34375 1.34375 8C1.34375 11.6562 4.34375 14.6562 8 14.6562C11.6562 14.6562 14.6562 11.6562 14.6562 8C14.6562 4.34375 11.6562 1.34375 8 1.34375Z"
                      fill="black"
                    />
                    <path
                      d="M4.03125 7.5625H11.9688V8.4375H4.03125V7.5625Z"
                      fill="black"
                    />
                    <path
                      d="M7.5625 4.03125H8.4375V11.9688H7.5625V4.03125Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <div className="table-row-item table-item-code">838051</div>
              <div className="table-row-item table-item-partnumber">
                KQ2E08-00A
              </div>
              <div className="table-row-item table-item-description">
                Conexão Instantanea reta de latao - Pacote com 10
              </div>
              <div className="table-row-item table-item-measurement">
                Metros
              </div>
              <div className="table-row-item table-item-deadline">
                15/01/2024
              </div>
              <div className="table-row-item table-row-item-price table-item-price">
                <span>12,11</span>
                <button onClick={(e) => handlePriceDetails(e)}>
                  Detalhar Preço
                </button>
              </div>
              <div className="table-row-item table-row-item-total table-item-total">
                121,10
              </div>
              <div className="table-row-item table-item-buttons">
                <button className="add-to-cart">Adicionar ao Carrinho</button>
                <button className="technical-infos">
                  Informações Técnicas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PriceDetails = ({ show, setShow, postion }: any) => {
  return (
    <div
      className="price-details-wrapper"
      style={{
        display: show ? "block" : "none",
        top: `${postion.top + 30}px`,
        left: `${postion.left}px`,
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="price-details-container">
        <div className="price-details-speech-bubble">
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 0L11.1962 9.41667H0.803848L6 0Z" fill="white" />
          </svg>
        </div>
        <div
          className="price-details-close-icon"
          onClick={(e) => {
            e.stopPropagation();
            setShow(false);
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_208_2738)">
              <path
                d="M12.6663 4.27665L11.723 3.33331L7.99967 7.05665L4.27634 3.33331L3.33301 4.27665L7.05634 7.99998L3.33301 11.7233L4.27634 12.6666L7.99967 8.94331L11.723 12.6666L12.6663 11.7233L8.94301 7.99998L12.6663 4.27665Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_208_2738">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="price-details-table">
          <div className="price-details-table-header">
            <div className="price-details-table-header-item price-details-table-item-ipi">
              % IPI
            </div>
            <div className="price-details-table-header-item price-details-table-item-icms-percent">
              % ICMS
            </div>
            <div className="price-details-table-header-item price-details-table-item-icms-base">
              % Red. Base ICMS
            </div>
            <div className="price-details-table-header-item price-details-table-item-icms-value">
              Valor do ICMS
            </div>
            <div className="price-details-table-header-item price-details-table-item-mya">
              % MYA
            </div>
            <div className="price-details-table-header-item price-details-table-item-total">
              TOTAL
            </div>
          </div>
          <div className="price-details-table-body">
            <div className="price-details-table-body-item price-details-table-item-ipi">
              3,25
            </div>
            <div className="price-details-table-body-item price-details-table-item-icms-percent">
              3,25
            </div>
            <div className="price-details-table-body-item price-details-table-item-icms-base">
              3,25
            </div>
            <div className="price-details-table-body-item price-details-table-item-icms-value">
              3,25
            </div>
            <div className="price-details-table-body-item price-details-table-item-mya">
              3,25
            </div>
            <div className="price-details-table-body-item price-details-table-item-total">
              3,25
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;