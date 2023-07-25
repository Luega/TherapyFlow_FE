import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useContext } from "react";
import ClientsContext from "../contexts/ClientContext";

const Clients = () => {
  const { clients } = useContext(ClientsContext);

  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>CLIENTS:</h1>
        {clients &&
          clients.map((client) => {
            return (
              <Card
                key={client.id}
                onClick={() => navigate(`/clients/${client.id}`)}
              >{`${client.firstName} ${client.lastName}`}</Card>
            );
          })}
      </div>
      <Link to="/">Home</Link>
    </>
  );
};

export default Clients;
