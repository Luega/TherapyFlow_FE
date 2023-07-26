/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useContext, useEffect, useState } from "react";
import ClientsContext from "../contexts/ClientContext";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Note from "../components/Note";
import { INote } from "../utils/types";
import axios from "axios";

const Client = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const { clients } = useContext(ClientsContext);

  const url: string = import.meta.env.VITE_NOTES_URL;

  const pathname = window.location.pathname;
  const segment = pathname.substring(pathname.lastIndexOf("/") + 1);
  const client = clients.filter(
    (client) => client.id.toString() === segment
  )[0];

  useEffect(() => {
    const getNotes = async (id: string) => {
      await axios
        .get(`${url}?clientId=${id}`)
        .then((res) => setNotes(res.data.data))
        .catch((err) => console.log(err));
    };

    getNotes(segment);
  }, []);

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
        <h1>Treatment notes:</h1>
        {notes &&
          notes.map((note) => {
            return (
              <Card key={note.id}>
                <Note note={note} />
              </Card>
            );
          })}
      </div>
      <Link to="/clients">Clients</Link>
    </>
  );
};

export default Client;
