import { useContext } from "react";
import ClientsContext from "../contexts/ClientContext";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Client = () => {
  const { clients } = useContext(ClientsContext);

  const pathname = window.location.pathname;
  const segment = pathname.substring(pathname.lastIndexOf("/") + 1);
  const client = clients.filter(
    (client) => client.id.toString() === segment
  )[0];

  return (
    <>
      <div>
        <h1>Client info:</h1>
        {client && (
          <Card>
            <h3>{`First name: ${client.firstName}`}</h3>
            <h3>{`Last name: ${client.lastName}`}</h3>
          </Card>
        )}
        {!client && <Card>No Client</Card>}
      </div>
      <Link to="/clients">Clients</Link>
    </>
  );
};

export default Client;
