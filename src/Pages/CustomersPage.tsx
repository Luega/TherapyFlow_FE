import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useContext } from "react";
import CustomersContext from "../contexts/CustomerContext";

const CustomersPage = () => {
  const { customers } = useContext(CustomersContext);

  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Customers:</h1>
        {customers &&
          customers.map((customer) => {
            return (
              <Card
                className="cursor-pointer"
                key={customer.id}
                onClick={() => navigate(`/customers/${customer.id}`)}
              >{`${customer.firstName} ${customer.lastName}`}</Card>
            );
          })}
      </div>
      <Link to="/">Home</Link>
    </>
  );
};

export default CustomersPage;
