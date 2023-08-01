import { Link } from "react-router-dom";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome User</h1>
      <Card>
        <Link to="/new-customer">+</Link>
      </Card>
      <Card>
        <Link to="/customers">Customers</Link>
      </Card>
    </div>
  );
};

export default HomePage;
