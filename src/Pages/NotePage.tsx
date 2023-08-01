/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useContext } from "react";
import CustomerContext from "../contexts/CustomerContext";
import { Link } from "react-router-dom";

const NotePage = () => {
  const { customers } = useContext(CustomerContext);

  const pathname = window.location.pathname;
  const segmentsArray = pathname.split("/");
  const customerId = segmentsArray[segmentsArray.length - 2];
  const noteId = segmentsArray[segmentsArray.length - 1];
  const customer = customers.filter(
    (customer) => customer.id === customerId
  )[0];
  const note = customer.notes.filter((note) => note.id === noteId)[0];

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
      <Link to={`/customers/${customer.id}`}>Customer</Link>
    </>
  );
};

export default NotePage;
