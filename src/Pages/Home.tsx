import { Link } from "react-router-dom";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <h1>Welcome User</h1>
      <Card>
        <Link to="/clients">Clients</Link>
      </Card>
    </div>
  );
};

export default Home;
