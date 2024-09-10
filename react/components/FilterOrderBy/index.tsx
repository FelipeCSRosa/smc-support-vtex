import React, { /* useEffect, */ useState } from "react";
/* import { canUseDOM } from "vtex.render-runtime"; */
import "./global.css";

const FilterOrderBy = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  /* useEffect(() => {
    const handleClick = () => {
      setShowFilterOptions(false);
    };

    if (canUseDOM) {
      window.addEventListener("click", handleClick);
    }

    return () => {
      if (canUseDOM) {
        window.removeEventListener("click", handleClick);
      }
    };
  }, [canUseDOM]); */

  return (
    <>
      <div
        className="filter-orderby-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="filter-container"
          onClick={(e) => {
            e.stopPropagation();
            setShowFilterOptions(!showFilterOptions);
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_200_5128)">
              <path
                d="M11.25 17.5H8.75C8.41848 17.5 8.10054 17.3683 7.86612 17.1339C7.6317 16.8995 7.5 16.5815 7.5 16.25V11.5063L2.86875 6.875C2.63401 6.64166 2.5014 6.32474 2.5 5.99375V3.75C2.5 3.41848 2.6317 3.10054 2.86612 2.86612C3.10054 2.6317 3.41848 2.5 3.75 2.5H16.25C16.5815 2.5 16.8995 2.6317 17.1339 2.86612C17.3683 3.10054 17.5 3.41848 17.5 3.75V5.99375C17.4986 6.32474 17.366 6.64166 17.1313 6.875L12.5 11.5063V16.25C12.5 16.5815 12.3683 16.8995 12.1339 17.1339C11.8995 17.3683 11.5815 17.5 11.25 17.5ZM3.75 3.75V5.99375L8.75 10.9937V16.25H11.25V10.9937L16.25 5.99375V3.75H3.75Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_200_5128">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Filtrar</span>
        </div>
        <p className="filter-orderby-message">
          * Prazo de entrega sujeito a alteração de acordo com a disponibilidade
          do fechamento do pedido.
        </p>
        <div className="code-orderby-container">
          <div className="purchase-code-container">
            <input type="text" />
            <button>Preencher todos os campos de cód. de compra</button>
          </div>
          <div className="orderby-container">
            <select name="orderby" id="orderby">
              <option value="">Ordenar por</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
            <span>
              <svg
                width="7"
                height="5"
                viewBox="0 0 7 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.81675 1.81641L4.33432 4.31641C4.19565 4.43945 4.0355 4.5 3.87534 4.5C3.71518 4.5 3.55542 4.43896 3.43335 4.31689L0.950925 1.81689C0.754722 1.63867 0.701198 1.36914 0.797956 1.13672C0.894714 0.904297 1.1228 0.75 1.37534 0.75H6.35776C6.6105 0.75 6.83862 0.901973 6.93549 1.13574C7.03237 1.36951 6.99643 1.63867 6.81675 1.81641Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div
        className="filter-drawer"
        style={{
          transform: showFilterOptions ? "translate(0)" : "translate(+110%)",
        }}
      >
        <div className="filter-drawer-header">
          <p className="filter-drawer-header-title">Filtrar</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={(e) => {
              e.stopPropagation();
              setShowFilterOptions(false);
            }}
          >
            <path
              d="M4.41675 15.5834C4.58341 15.75 4.75008 15.8334 5.00008 15.8334C5.25008 15.8334 5.41675 15.75 5.58341 15.5834L10.0001 11.1667L14.4167 15.5834C14.5834 15.75 14.8334 15.8334 15.0001 15.8334C15.1667 15.8334 15.4167 15.75 15.5834 15.5834C15.9167 15.25 15.9167 14.75 15.5834 14.4167L11.1667 10L15.5834 5.58335C15.9167 5.25002 15.9167 4.75002 15.5834 4.41669C15.2501 4.08335 14.7501 4.08335 14.4167 4.41669L10.0001 8.83335L5.58341 4.41669C5.25008 4.08335 4.75008 4.08335 4.41675 4.41669C4.08341 4.75002 4.08341 5.25002 4.41675 5.58335L8.83342 10L4.41675 14.4167C4.08341 14.75 4.08341 15.25 4.41675 15.5834Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="filter-family">
          <p className="filter-title filter-family-title">
            Selecione a Família
          </p>
          <div>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>

            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>

            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Atuador</span>
            </label>
          </div>
        </div>
        <div className="filter-scroll">
          <p className="filter-title">Selecione o tipo</p>
          <div className="filter-scroll-options">
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Tipo 1</span>
            </label>
          </div>
        </div>
        <div className="filter-scroll">
          <p className="filter-title">Selecione a Série</p>
          <div className="filter-scroll-options">
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>

            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>

            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>

            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
            <label
              htmlFor="filter-option-placeholder-1"
              className="filter-option"
            >
              <input
                type="checkbox"
                name="filter-option-placeholder-1"
                id="filter-option-placeholder-1"
              />
              <span>Série 0001</span>
            </label>
          </div>
        </div>
        <button className="filter-buttons">Aplicar</button>
      </div>
    </>
  );
};

export default FilterOrderBy;
