/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { PropsWithChildren, useEffect, useState } from "react";
import axios from "axios";
import { ICustomer } from "../utils/types";

interface ICustomerContext {
  customers: ICustomer[];
}

const url: string = import.meta.env.VITE_CUSTOMER_URL;

const CustomerContext = React.createContext({} as ICustomerContext);

export const CustomerContextProvider = (props: PropsWithChildren) => {
  const [state, setState] = useState<ICustomerContext>({
    customers: [],
  });

  useEffect(() => {
    const getClients = async () => {
      await axios
        .get(url)
        .then((res) => setState({ customers: res.data.data }))
        .catch((err) => console.log(err));
    };

    getClients();
  }, []);

  return (
    <CustomerContext.Provider value={{ customers: state.customers }}>
      {props.children}
    </CustomerContext.Provider>
  );
};

export default CustomerContext;
