import React from "react";
import "./global.css";

const UserInfos = () => {
  return (
    <div className="user-infons-container">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM14.25 9C14.25 10.2426 13.2426 11.25 12 11.25V12.75C14.0711 12.75 15.75 11.0711 15.75 9H14.25ZM12 11.25C10.7574 11.25 9.75 10.2426 9.75 9H8.25C8.25 11.0711 9.92893 12.75 12 12.75V11.25ZM9.75 9C9.75 7.75736 10.7574 6.75 12 6.75V5.25C9.92893 5.25 8.25 6.92893 8.25 9H9.75ZM12 6.75C13.2426 6.75 14.25 7.75736 14.25 9H15.75C15.75 6.92893 14.0711 5.25 12 5.25V6.75ZM8.99998 15.75H15V14.25H9L8.99998 15.75ZM15 15.75C15.6008 15.75 16.1482 16.0891 16.5769 16.6848C17.0089 17.2852 17.25 18.0598 17.25 18.7083H18.75C18.75 17.7371 18.4052 16.6575 17.7944 15.8086C17.1801 14.9551 16.2275 14.25 15 14.25V15.75ZM6.75 18.7083C6.75 18.0598 6.99109 17.2852 7.42315 16.6848C7.85183 16.0891 8.39919 15.75 8.99998 15.75L9 14.25C7.77251 14.25 6.81989 14.9551 6.20564 15.8086C5.59477 16.6575 5.25 17.7371 5.25 18.7083H6.75Z"
          fill="#232323"
        />
      </svg>
      <div className="user-infons-details-container">
        <p className="user-infons-details-container-name">
          Olá, Antônio | Abc-Xyz Ind LTDA
        </p>
        <p className="user-infons-details-container-consultant">
          Consultor: João Mendes
        </p>
        <p className="user-infons-details-container-phone">(11) 4082-0600</p>
        <p className="user-infons-details-container-email">
          joaom@smcbr.com.br
        </p>
      </div>
    </div>
  );
};

export default UserInfos;