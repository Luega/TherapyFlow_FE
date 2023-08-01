/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useContext } from "react";
import CustomerContext from "../contexts/CustomerContext";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import NotePreview from "../components/NotePreview";

const CustomerPage = () => {
  const { customers } = useContext(CustomerContext);
  const navigate = useNavigate();

  const pathname = window.location.pathname;
  const segment = pathname.substring(pathname.lastIndexOf("/") + 1);
  const customer = customers.filter((customer) => customer.id === segment)[0];

  return (
    <>
      <div>
        {customer ? (
          <>
            <h1>Client info:</h1>
            <Card>
              <h3>{`First name: ${customer.firstName}`}</h3>
              <h3>{`Last name: ${customer.lastName}`}</h3>
            </Card>
            <h1>Treatment notes:</h1>
            <Card>
              <Link to="/new-note">+</Link>
            </Card>
            {customer.notes.map((note) => {
              return (
                <Card
                  key={note.id}
                  className="cursor-pointer"
                  onClick={() => navigate(`/clients/${customer.id}/${note.id}`)}
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
      <Link to="/customers">Customers</Link>
    </>
  );
};

export default CustomerPage;
