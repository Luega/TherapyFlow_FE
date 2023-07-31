/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useContext } from "react";
import ClientsContext from "../contexts/ClientContext";
import { Link } from "react-router-dom";

const Client = () => {
  const { clients } = useContext(ClientsContext);

  const pathname = window.location.pathname;
  const segmentsArray = pathname.split("/");
  const clientId = segmentsArray[segmentsArray.length - 2];
  const noteId = segmentsArray[segmentsArray.length - 1];
  const client = clients.filter((client) => client.id === clientId)[0];
  const note = client.notes.filter((note) => note.id === noteId)[0];

  return (
    <>
      <div>
        {note ? (
          <>
            <h1>{note.title}</h1>
            <p>{note.text}</p>
          </>
        ) : (
          <h1>No Note</h1>
        )}
      </div>
      <Link to={`/clients/${client.id}`}>Client</Link>
    </>
  );
};

export default Client;
