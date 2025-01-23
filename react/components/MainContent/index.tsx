import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import getCustomerProducts from "../../graphql/getCustomerProducts.graphql";

const OrderInfosContext = createContext<any>({
  items: [],
  setItems: () => {},
  getCustomerProductsData: {},
});

const MainContent = ({ children }: any) => {
  const [items, setItems] = useState<any[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFamily, setSelectedFamily] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [orderBy, setOrderBy] = useState("");

  const [globalOrderCode, setGlobalOrderCode] = useState("");

  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const { data: getCustomerProductsData } = useQuery(getCustomerProducts, {
    variables: {
      cnpjcliente: "01376079000112",
      pagina: 1,
      tamanhopagina: 1000,
    },
    ssr: false,
  });

  useEffect(() => {
    if (getCustomerProductsData) {
      setProducts(getCustomerProductsData?.getCustomerProducts?.produtos);
      setFilteredProducts(
        getCustomerProductsData?.getCustomerProducts?.produtos
      );
    }
  }, [getCustomerProductsData]);

  useEffect(() => {
    let filteredData = [] as any[];

    if (selectedFamily && selectedType && selectedSeries) {
      filteredData = products
        ?.filter(
          (item: any) =>
            item.produtoprotheus
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            item.descricaoprotheus
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            item.produtocliente.toLowerCase().includes(searchTerm.toLowerCase())
        )
        ?.filter((item: any) =>
          selectedFamily ? item.familia === selectedFamily : true
        )
        ?.filter((item: any) =>
          selectedType ? item.tipo === selectedType : true
        )
        ?.filter((item: any) =>
          selectedSeries ? item.serie === selectedSeries : true
        );
    }

    if (!selectedFamily || !selectedType || !selectedSeries) {
      filteredData = products?.filter(
        (item: any) =>
          item.produtoprotheus
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item.descricaoprotheus
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          item.produtocliente.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (orderBy) {
      switch (orderBy) {
        case "produto":
          filteredData = filteredData?.sort((a: any, b: any) =>
            a.produtoprotheus.localeCompare(b.produtoprotheus)
          );
          break;
        case "preco-asc":
          filteredData = filteredData?.sort(
            (a: any, b: any) => a.preco - b.preco
          );
          break;
        case "preco-desc":
          filteredData = filteredData?.sort(
            (a: any, b: any) => b.preco - a.preco
          );
          break;
        default:
          break;
      }
    }

    setFilteredProducts(filteredData);
  }, [selectedFamily, selectedType, selectedSeries, searchTerm, orderBy]);

  return (
    <OrderInfosContext.Provider
      value={{
        items,
        setItems,
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        searchTerm,
        setSearchTerm,
        globalOrderCode,
        setGlobalOrderCode,
        selectedFamily,
        setSelectedFamily,
        selectedType,
        setSelectedType,
        selectedSeries,
        setSelectedSeries,
        orderBy,
        setOrderBy,
      }}
    >
      {children}
    </OrderInfosContext.Provider>
  );
};

export const useOrderInfosContext = () => {
  return useContext(OrderInfosContext);
};

export default MainContent;
