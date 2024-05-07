import React from "react";
import "./global.css";

const Cards = () => {
  return (
    <div className="cards-container">
      <CardOrder />
      <CardSearch />
    </div>
  );
};

const CardOrder = () => {
  return (
    <div className="card-container card-order-container">
      <div className="card-order-totalizers">
        <h1 className="card-title">Carrinho de Compras</h1>
        <div className="card-order-totalizers-values">
          <div className="card-order-totalizer">
            <p className="card-order-totalizer-title">Item(s)</p>
            <p className="card-order-totalizer-value">16</p>
          </div>
          <div className="card-order-totalizer">
            <p className="card-order-totalizer-title">
              Valor Total R$ <span>(Sem IPI, ST)</span>
            </p>
            <p className="card-order-totalizer-value">R$ 1.616,79</p>
          </div>
          <button className="card-order-button">Finalizar Compra</button>
        </div>
      </div>
      <div className="card-order-actions">
        <div className="card-order-action">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_197_4010)">
              <path d="M7 6H6V12H7V6Z" fill="#7A7A7A" />
              <path d="M10 6H9V12H10V6Z" fill="#7A7A7A" />
              <path
                d="M2 3V4H3V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4H14V3H2ZM4 14V4H12V14H4Z"
                fill="#7A7A7A"
              />
              <path d="M10 1H6V2H10V1Z" fill="#7A7A7A" />
            </g>
            <defs>
              <clipPath id="clip0_197_4010">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="card-order-action-title">Limpar</p>
        </div>
        <div className="card-order-action">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_197_4006)">
              <path
                d="M11.4998 9.99998C11.1256 10.0019 10.7565 10.0877 10.4199 10.2513C10.0833 10.4149 9.78764 10.6519 9.55485 10.945L5.89985 8.65998C6.03306 8.23006 6.03306 7.7699 5.89985 7.33998L9.55485 5.05498C9.92582 5.51434 10.4474 5.82757 11.0272 5.93918C11.607 6.0508 12.2076 5.9536 12.7226 5.66479C13.2376 5.37599 13.6338 4.91423 13.8409 4.3613C14.048 3.80838 14.0528 3.19999 13.8543 2.6439C13.6558 2.08781 13.267 1.61991 12.7565 1.3231C12.2461 1.02628 11.6471 0.919705 11.0656 1.02225C10.4841 1.12479 9.95773 1.42983 9.57963 1.88334C9.20152 2.33685 8.99613 2.90954 8.99985 3.49998C9.00221 3.72357 9.03587 3.94573 9.09985 4.15998L5.44485 6.44498C5.12217 6.03877 4.68112 5.743 4.18282 5.59868C3.68453 5.45435 3.15368 5.46861 2.66385 5.63949C2.17403 5.81036 1.74949 6.12938 1.44909 6.55233C1.14869 6.97528 0.987305 7.48121 0.987305 7.99998C0.987305 8.51875 1.14869 9.02468 1.44909 9.44763C1.74949 9.87058 2.17403 10.1896 2.66385 10.3605C3.15368 10.5313 3.68453 10.5456 4.18282 10.4013C4.68112 10.257 5.12217 9.96119 5.44485 9.55498L9.09985 11.84C9.03587 12.0542 9.00221 12.2764 8.99985 12.5C8.99985 12.9944 9.14647 13.4778 9.42117 13.8889C9.69588 14.3 10.0863 14.6205 10.5431 14.8097C11 14.9989 11.5026 15.0484 11.9876 14.9519C12.4725 14.8555 12.918 14.6174 13.2676 14.2677C13.6172 13.9181 13.8553 13.4727 13.9518 12.9877C14.0483 12.5028 13.9988 12.0001 13.8095 11.5433C13.6203 11.0865 13.2999 10.696 12.8888 10.4213C12.4777 10.1466 11.9943 9.99998 11.4998 9.99998ZM11.4998 1.99998C11.7965 1.99998 12.0865 2.08795 12.3332 2.25278C12.5799 2.4176 12.7721 2.65187 12.8857 2.92595C12.9992 3.20004 13.0289 3.50164 12.971 3.79262C12.9131 4.08359 12.7703 4.35086 12.5605 4.56064C12.3507 4.77042 12.0835 4.91328 11.7925 4.97116C11.5015 5.02904 11.1999 4.99933 10.9258 4.8858C10.6517 4.77227 10.4175 4.58001 10.2526 4.33334C10.0878 4.08666 9.99985 3.79665 9.99985 3.49998C9.99985 3.10216 10.1579 2.72062 10.4392 2.43932C10.7205 2.15802 11.102 1.99998 11.4998 1.99998ZM3.49985 9.49998C3.20318 9.49998 2.91317 9.41201 2.66649 9.24718C2.41982 9.08236 2.22756 8.84809 2.11403 8.57401C2.0005 8.29992 1.97079 7.99832 2.02867 7.70734C2.08655 7.41637 2.22941 7.1491 2.43919 6.93932C2.64897 6.72954 2.91624 6.58668 3.20721 6.5288C3.49818 6.47092 3.79978 6.50063 4.07387 6.61416C4.34796 6.72769 4.58223 6.91995 4.74705 7.16662C4.91187 7.4133 4.99985 7.70331 4.99985 7.99998C4.99985 8.3978 4.84181 8.77934 4.56051 9.06064C4.2792 9.34194 3.89767 9.49998 3.49985 9.49998ZM11.4998 14C11.2032 14 10.9132 13.912 10.6665 13.7472C10.4198 13.5824 10.2276 13.3481 10.114 13.074C10.0005 12.7999 9.97079 12.4983 10.0287 12.2073C10.0865 11.9164 10.2294 11.6491 10.4392 11.4393C10.649 11.2295 10.9162 11.0867 11.2072 11.0288C11.4982 10.9709 11.7998 11.0006 12.0739 11.1142C12.348 11.2277 12.5822 11.42 12.7471 11.6666C12.9119 11.9133 12.9998 12.2033 12.9998 12.5C12.9998 12.8978 12.8418 13.2793 12.5605 13.5606C12.2792 13.8419 11.8977 14 11.4998 14Z"
                fill="#7A7A7A"
              />
            </g>
            <defs>
              <clipPath id="clip0_197_4006">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="card-order-action-title">Compartilhar</p>
        </div>
        <div className="card-order-action">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_197_3996)">
              <path
                d="M14 9.5H7.415L8.705 8.205L8 7.5L5.5 10L8 12.5L8.705 11.795L7.415 10.5H14V9.5Z"
                fill="#7A7A7A"
              />
              <path
                d="M12 7.00001V5.00001C12.0004 4.93421 11.9878 4.86897 11.9629 4.80806C11.938 4.74714 11.9013 4.69173 11.855 4.64501L8.355 1.14501C8.30828 1.09867 8.25287 1.06201 8.19195 1.03712C8.13103 1.01224 8.0658 0.999628 8 1.00001H3C2.73478 1.00001 2.48043 1.10537 2.29289 1.2929C2.10536 1.48044 2 1.73479 2 2.00001V14C2 14.2652 2.10536 14.5196 2.29289 14.7071C2.48043 14.8947 2.73478 15 3 15H11C11.2652 15 11.5196 14.8947 11.7071 14.7071C11.8946 14.5196 12 14.2652 12 14V13H11V14H3V2.00001H7V5.00001C7 5.26522 7.10536 5.51958 7.29289 5.70712C7.48043 5.89465 7.73478 6.00001 8 6.00001H11V7.00001H12ZM8 5.00001V2.20501L10.795 5.00001H8Z"
                fill="#7A7A7A"
              />
            </g>
            <defs>
              <clipPath id="clip0_197_3996">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="card-order-action-title">Importar</p>
        </div>
        <div className="card-order-action">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_197_4001)">
              <path
                d="M6.5 10.5H13.085L11.795 11.795L12.5 12.5L15 10L12.5 7.5L11.795 8.205L13.085 9.5H6.5V10.5Z"
                fill="#7A7A7A"
              />
              <path
                d="M11 7.00001V5.00001C11.0004 4.93421 10.9878 4.86897 10.9629 4.80806C10.938 4.74714 10.9013 4.69173 10.855 4.64501L7.355 1.14501C7.30828 1.09867 7.25287 1.06201 7.19195 1.03712C7.13103 1.01224 7.0658 0.999628 7 1.00001H2C1.73478 1.00001 1.48043 1.10537 1.29289 1.2929C1.10536 1.48044 1 1.73479 1 2.00001V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8947 1.73478 15 2 15H10C10.2652 15 10.5196 14.8947 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14V13H10V14H2V2.00001H6V5.00001C6 5.26522 6.10536 5.51958 6.29289 5.70712C6.48043 5.89465 6.73478 6.00001 7 6.00001H10V7.00001H11ZM7 5.00001V2.20501L9.795 5.00001H7Z"
                fill="#7A7A7A"
              />
            </g>
            <defs>
              <clipPath id="clip0_197_4001">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="card-order-action-title">Exportar</p>
        </div>
        <div className="card-order-action">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_197_4017)">
              <path
                d="M12.85 4.65L9.35 1.15C9.25 1.05 9.15 1 9 1H4C3.45 1 3 1.45 3 2V14C3 14.55 3.45 15 4 15H12C12.55 15 13 14.55 13 14V5C13 4.85 12.95 4.75 12.85 4.65ZM9 2.2L11.8 5H9V2.2ZM12 14H4V2H8V5C8 5.55 8.45 6 9 6H12V14Z"
                fill="#7A7A7A"
              />
              <path d="M11 11H5V12H11V11Z" fill="#7A7A7A" />
              <path d="M11 8H5V9H11V8Z" fill="#7A7A7A" />
            </g>
            <defs>
              <clipPath id="clip0_197_4017">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="card-order-action-title">Download arquivo padrão</p>
        </div>
      </div>
    </div>
  );
};

const CardSearch = () => {
  return (
    <div className="card-container card-search-container">
      <div className="card-search-top">
        <h1 className="card-title">Procurar produtos</h1>
        <div className="card-search-input-container">
          <input
            type="text"
            placeholder="Digite o Código do Produto ou Descrição"
            className="card-search-input"
          />
          <button className="card-search-button">
            Busca
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_196_1579)">
                <path
                  d="M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM16.3336 15.273C16.0407 14.9801 15.5659 14.9801 15.273 15.273C14.9801 15.5659 14.9801 16.0408 15.273 16.3336L16.3336 15.273ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM20.5303 19.4697L16.3336 15.273L15.273 16.3336L19.4697 20.5303L20.5303 19.4697Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_196_1579">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className="card-search-bottom">
        <label htmlFor="search-customer-code" className="card-search-check">
          <input
            type="checkbox"
            name="search-customer-code"
            id="search-customer-code"
          />
          <span>Fazer busca com seu código de cliente</span>
        </label>
      </div>
    </div>
  );
};

export default Cards;
