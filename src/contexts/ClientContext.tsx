/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { PropsWithChildren, useEffect, useState } from "react";
import axios from "axios";
import { IClient } from "../utils/types";

interface IClientContext {
  clients: IClient[];
}

const url: string = import.meta.env.VITE_CLIENTS_URL;

const ClientsContext = React.createContext({} as IClientContext);

export const ClientsContextProvider = (props: PropsWithChildren) => {
  const [state, setState] = useState<IClientContext>({
    clients: [],
  });

  useEffect(() => {
    const getClients = async () => {
      await axios
        .get(url)
        .then((res) => setState({ clients: res.data.data }))
        .catch((err) => console.log(err));
    };

    getClients();
  }, []);

  return (
    <ClientsContext.Provider value={{ clients: state.clients }}>
      {props.children}
    </ClientsContext.Provider>
  );
};

export default ClientsContext;
