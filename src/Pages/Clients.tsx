import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import { Client } from "../utils/types";

const fetchData = async () => {
  const res = await axios.get("http://localhost:5103/api/clients");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const data: Client[] = res.data.data;
  return data;
};

const Clients = () => {
  const { isLoading, error, data } = useQuery<Client[], Error>(
    "data",
    fetchData
  );

  const navigate = useNavigate();
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
        {data &&
          data.map((client) => {
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
