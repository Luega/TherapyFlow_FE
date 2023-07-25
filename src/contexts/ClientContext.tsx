import React, { PropsWithChildren, useState } from "react";
import { Client } from "../utils/types";

interface IClientContext {
  clients: Client[];
}

const ClientsContext = React.createContext({} as IClientContext);

export const ClientsContextProvider = (props: PropsWithChildren) => {
  const [data, setData] = useState<IClientContext>({
    clients: [],
  });

  return (
    <ClientsContext.Provider value={{ clients: data.clients }}>
      {props.children}
    </ClientsContext.Provider>
  );
};

export default ClientsContext;
