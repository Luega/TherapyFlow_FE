import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NewNotePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>NewNotePage</div>
      <Button text="Back" onClick={() => navigate(-1)} />
    </>
  );
};

export default NewNotePage;
