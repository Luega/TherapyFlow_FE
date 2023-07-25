import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

type Client = {
  id: number;
  firstName: string;
  lastName: string;
};

const fetchData = async () => {
  const pathname = window.location.pathname;
  const segment = pathname.substring(pathname.lastIndexOf("/") + 1);
  const res = await axios.get(`http://localhost:5103/api/clients/${segment}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const data: Client = res.data.data;
  return data;
};

const Client = () => {
  const { isLoading, error, data } = useQuery<Client, Error>("data", fetchData);
  console.log(data);

  if (isLoading)
    return (
      <>
        <div>
          <h1>Loading...</h1>
        </div>
      </>
    );

  if (error)
    return (
      <>
        <div>
          <h1>{`An error has occurred: ${error.message}`}</h1>
        </div>
      </>
    );

  return (
    <>
      <div>
        <h1>CLIENTS:</h1>
        {data && <Card>{`${data.firstName} ${data.lastName}`}</Card>}
        {!data && <Card>No Client</Card>}
      </div>
      <Link to="/">Home</Link>
    </>
  );
};

export default Client;
