import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NewCustomerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>NewCustomerPage</div>
      <Button text="Back" onClick={() => navigate(-1)} />
    </>
  );
};

export default NewCustomerPage;
