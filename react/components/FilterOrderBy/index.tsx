import React, { useState } from "react";
import "./global.css";

const FilterOrderBy = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  return (
    <div className="filter-orderby-container">
      <div className="filter-wrapper">
        <div
          className="filter-container"
          onClick={() => setShowFilterOptions(true)}
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
        <div
          className="filter-options-container"
          style={{
            display: showFilterOptions ? "block" : "none",
          }}
        >
          <div className="filter-options-speech-bubble">
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
            className="filter-options-close-icon"
            onClick={() => setShowFilterOptions(false)}
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
          <p className="filter-option-title">Família</p>
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
      <p className="filter-orderby-message">
        * Prazo de entrega sujeito a alteração de acordo com a disponibilidade
        do fechamento do pedido.
      </p>
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
  );
};

export default FilterOrderBy;
