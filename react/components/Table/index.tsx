import React, { MouseEvent, useEffect, useState } from "react";
import { canUseDOM } from "vtex.render-runtime";
import "./global.css";
import { useOrderInfosContext } from "../MainContent";
import formatToBRL from "../../utils/formatToBRL";

const Table = () => {
  const [showPriceDetails, setShowPriceDetails] = useState(false);
  const [priceDetailsPostion, setPriceDetailsPosition] = useState({
    top: 0,
    left: 0,
  });

  const { filteredProducts } = useOrderInfosContext();

  useEffect(() => {
    const handleHidePriceDetails = () => {
      setShowPriceDetails(false);
    };

    window.addEventListener("scroll", handleHidePriceDetails);
    window.addEventListener("resize", handleHidePriceDetails);

    return () => {
      window.removeEventListener("scroll", handleHidePriceDetails);
      window.removeEventListener("resize", handleHidePriceDetails);
    };
  }, []);

  return (
    <>
      <div className="table-wrapper">
        <div className="table-container">
          <div className="table-header">
            <div className="table-header-item table-item-selected" />
            <div className="table-header-item table-item-quantity">
              Quantidade
            </div>
            <div className="table-header-item table-item-product">Produto</div>
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
            <div className="table-header-item table-item-total">Total R$</div>
            <div className="table-header-item table-item-code">
              Cód. de pedido de compra
            </div>
            <div className="table-header-item table-item-buttons" />
          </div>
          <div className="table-body">
            {filteredProducts?.map((product: any) => (
              <TableRow
                product={product}
                setShowPriceDetails={setShowPriceDetails}
                setPriceDetailsPosition={setPriceDetailsPosition}
              />
            ))}
          </div>
          <PriceDetails
            show={showPriceDetails}
            setShow={setShowPriceDetails}
            postion={priceDetailsPostion}
          />
        </div>
      </div>
    </>
  );
};

const TableRow = ({
  product,
  setShowPriceDetails,
  setPriceDetailsPosition,
}: any) => {
  const [schedulesOpen, setSchedulesOpen] = useState(false);

  const { items, setItems, globalOrderCode } = useOrderInfosContext();

  const {
    produtoprotheus,
    descricaoprotheus,
    unidademedida,
    prazoentrega,
    preco,
  } = product;

  const currentItem = items.find(
    //TODO: Change to SKU ID
    (item: any) => item.produtoprotheus === produtoprotheus
  );

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

  const calculateParcels = (quantity: number, installments: number) => {
    if (quantity < installments) {
      installments = quantity;
    }

    const itemsPerInstallment = Math.floor(quantity / installments);
    const remainingItems = quantity % installments;

    const handleParcels = Array(installments).fill({
      quantity: itemsPerInstallment,
      date: new Date(),
    });

    const updatedParcels = handleParcels.map((parcel, index) => {
      const newDate = new Date();
      newDate.setMonth(newDate.getMonth() + index + 1);
      const formattedDate = newDate.toISOString().split("T")[0];
      return {
        ...parcel,
        date: formattedDate,
      };
    });

    for (let i = 0; i < remainingItems; i++) {
      updatedParcels[i].quantity += 1;
    }

    return updatedParcels;
  };

  const handleScheduleInstallments = (scheduleInstallments: number) => {
    setItems((prevItems: any[]) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.produtoprotheus === produtoprotheus
      );

      const updatedItems = [...prevItems];

      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        parcels: calculateParcels(
          updatedItems[itemIndex].quantity,
          scheduleInstallments
        ),
      };

      return updatedItems;
    });
  };

  const updateItems = (newQuantity: number) => {
    setItems((prevItems: any[]) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.produtoprotheus === produtoprotheus
      );

      if (newQuantity > 0) {
        if (itemIndex !== -1) {
          const updatedItems = [...prevItems];
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            quantity: newQuantity,
            parcels: calculateParcels(
              newQuantity,
              updatedItems[itemIndex].parcels.length
            ),
          };
          return updatedItems;
        }

        return [
          ...prevItems,
          {
            ...product,
            quantity: newQuantity,
            parcels: calculateParcels(newQuantity, 1),
          },
        ];
      } else {
        if (itemIndex !== -1 && prevItems[itemIndex].code) {
          const updatedItems = [...prevItems];
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            quantity: 0,
          };
          return updatedItems;
        }

        return prevItems.filter(
          (item) => item.produtoprotheus !== produtoprotheus
        );
      }
    });
  };

  const incrementQuantity = () => {
    if (currentItem) {
      updateItems(currentItem.quantity + 1);
    } else {
      updateItems(1);
    }
  };

  const decrementQuantity = () => {
    if (currentItem) {
      updateItems(currentItem.quantity - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    const newQuantity = isNaN(value) || value < 0 ? 0 : value;
    updateItems(newQuantity);
  };

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

  const handleItemCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setItems((prevItems: any[]) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.produtoprotheus === produtoprotheus
      );

      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          code: value,
        };
        return updatedItems;
      }

      return [...prevItems, { ...product, code: value, quantity: 0 }];
    });
  };

  return (
    <>
      <div className="table-row-container">
        <div className="table-row-columns">
          <div className="table-row-item table-item-selected">
            {currentItem?.quantity ? (
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
            <button onClick={decrementQuantity}>
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
            <input
              type="number"
              value={currentItem?.quantity || 0}
              onChange={handleInputChange}
            />
            <button onClick={incrementQuantity}>
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
          <div className="table-row-item table-item-product">
            {produtoprotheus}
          </div>
          <div className="table-row-item table-item-partnumber">
            {descricaoprotheus}
          </div>
          <div className="table-row-item table-item-description">
            Conexão Instantanea reta de latao - Pacote com 10
          </div>
          <div className="table-row-item table-item-measurement">
            {unidademedida}
          </div>
          <div className="table-row-item table-row-item-deadline table-item-deadline">
            {prazoentrega}
            <button
              onClick={() => {
                if (currentItem?.quantity > 0) {
                  setSchedulesOpen(!schedulesOpen);
                }
              }}
            >
              <span>Programar entrega</span>
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.52567 3.14454C8.39808 3.03906 8.23397 2.98828 8.0691 3.00326C7.90423 3.01823 7.75196 3.09776 7.64546 3.2245L5.00008 6.39851L2.35466 3.22455C2.24847 3.09731 2.09607 3.01747 1.93101 3.00259C1.76595 2.98771 1.60173 3.03901 1.47449 3.1452C1.34725 3.2514 1.26741 3.40379 1.25253 3.56885C1.23764 3.73392 1.28895 3.89813 1.39514 4.02537L4.52032 7.77554C4.57894 7.84584 4.65231 7.90241 4.73521 7.94122C4.81811 7.98003 4.90854 8.00015 5.00008 8.00015C5.09162 8.00015 5.18204 7.98003 5.26495 7.94122C5.34785 7.90241 5.42121 7.84584 5.47984 7.77554L8.60502 4.02532C8.71118 3.89795 8.76245 3.73366 8.74757 3.56852C8.73269 3.40337 8.65289 3.25089 8.52567 3.14454Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="table-row-item table-row-item-price table-item-price">
            <span>{formatToBRL(preco)}</span>
            <button onClick={(e) => handlePriceDetails(e)}>
              Detalhar Preço
            </button>
          </div>
          <div className="table-row-item table-row-item-total table-item-total">
            {formatToBRL((currentItem?.quantity || 0) * preco)}
          </div>
          <div className="table-row-item table-row-item-code table-item-code">
            <input
              type="text"
              value={currentItem?.code || globalOrderCode}
              onChange={handleItemCodeChange}
            />
          </div>
          <div className="table-row-item table-item-buttons">
            <button className="add-to-cart">Adicionar ao Carrinho</button>
            <button className="technical-infos">Informações Técnicas</button>
          </div>
        </div>
        <div
          className="table-row-schedule-delivery"
          style={{
            height: schedulesOpen && currentItem?.quantity ? "auto" : "0",
            paddingBottom:
              schedulesOpen && currentItem?.quantity ? "14px" : "0",
          }}
        >
          <div className="schedule-delivery-header">
            <div className="schedule-delivery-header-select-wrapper">
              <p>Quantidade de Parcelas</p>
              <div className="schedule-delivery-header-select-container">
                <select
                  name=""
                  id=""
                  value={currentItem?.parcels.length}
                  onChange={(e: any) =>
                    handleScheduleInstallments(Number(e.target.value))
                  }
                >
                  {Array.from(
                    { length: Math.min(currentItem?.quantity, 5) },
                    (_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    )
                  )}
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
            <div className="schedule-delivery-header-buttons">
              <button>Salvar</button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setSchedulesOpen(false);
                }}
              >
                <path
                  d="M4.41675 15.5834C4.58341 15.75 4.75008 15.8334 5.00008 15.8334C5.25008 15.8334 5.41675 15.75 5.58341 15.5834L10.0001 11.1667L14.4167 15.5834C14.5834 15.75 14.8334 15.8334 15.0001 15.8334C15.1667 15.8334 15.4167 15.75 15.5834 15.5834C15.9167 15.25 15.9167 14.75 15.5834 14.4167L11.1667 10L15.5834 5.58335C15.9167 5.25002 15.9167 4.75002 15.5834 4.41669C15.2501 4.08335 14.7501 4.08335 14.4167 4.41669L10.0001 8.83335L5.58341 4.41669C5.25008 4.08335 4.75008 4.08335 4.41675 4.41669C4.08341 4.75002 4.08341 5.25002 4.41675 5.58335L8.83342 10L4.41675 14.4167C4.08341 14.75 4.08341 15.25 4.41675 15.5834Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="schedule-delivery-table">
            <div className="schedule-delivery-table-header">
              <div className="schedule-delivery-table-header-column schedule-delivery-table-column-installment">
                Parcela
              </div>
              <div className="schedule-delivery-table-header-column schedule-delivery-table-column-quantity">
                Quantidade
              </div>
              <div className="schedule-delivery-table-header-column schedule-delivery-table-column-date">
                Data
              </div>
            </div>
            <div className="schedule-delivery-table-body">
              {currentItem?.parcels.map((parcel: any, index: number) => (
                <div key={index} className="schedule-delivery-table-row">
                  <div className="schedule-delivery-table-row-column schedule-delivery-table-column-installment">
                    {index + 1}
                  </div>
                  <div className="schedule-delivery-table-row-column schedule-delivery-table-column-quantity">
                    <input type="number" value={parcel.quantity} />
                  </div>
                  <div className="schedule-delivery-table-row-column schedule-delivery-table-column-date">
                    <div className="schedule-delivery-date-background" />
                    <input type="date" value={parcel.date} />
                  </div>
                </div>
              ))}
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
