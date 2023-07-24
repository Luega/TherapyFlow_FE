import { useQuery } from "react-query";
import axios from "axios";
import Card from "../components/Card";

type Client = {
  id: number;
  firstName: string;
  lastName: string;
};

const fetchData = async () => {
  const res = await axios.get("http://localhost:5103/api/clients");
  const data: Client[] = res.data.data;
  return data;
};

const Clients = () => {
  const { isLoading, error, data } = useQuery<Client[], Error>(
    "data",
    fetchData
  );

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
        {data &&
          data.map((client) => {
            return <Card>{`${client.firstName} ${client.lastName}`}</Card>;
          })}
      </div>
    </>
  );
};

export default Clients;
