/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useContext } from "react";
import ClientsContext from "../contexts/ClientContext";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import NotePreview from "../components/NotePreview";

const Client = () => {
  const { clients } = useContext(ClientsContext);
  const navigate = useNavigate();

  const pathname = window.location.pathname;
  const segment = pathname.substring(pathname.lastIndexOf("/") + 1);
  const client = clients.filter((client) => client.id === segment)[0];

  return (
    <>
      <div>
        {client ? (
          <>
            <h1>Client info:</h1>
            <Card>
              <h3>{`First name: ${client.firstName}`}</h3>
              <h3>{`Last name: ${client.lastName}`}</h3>
            </Card>
            <h1>Treatment notes:</h1>
            {client.notes.map((note) => {
              return (
                <Card
                  key={note.id}
                  className="cursor-pointer"
                  onClick={() => navigate(`/clients/${client.id}/${note.id}`)}
                >
                  <NotePreview note={note} />
                </Card>
              );
            })}
          </>
        ) : (
          <h1>No Client</h1>
        )}
      </div>
      <Link to="/clients">Clients</Link>
    </>
  );
};

export default Client;
