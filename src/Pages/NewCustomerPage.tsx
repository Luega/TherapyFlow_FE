/* eslint-disable @typescript-eslint/no-misused-promises */
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/Button";
import axios from "axios";

type Inputs = {
  FirstName: string;
  LastName: string;
};

const NewCustomerPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post("/api/customers", {
        FirstName: data.FirstName,
        LastName: data.LastName,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/customers");
  };

  return (
    <>
      <div>NewCustomerPage</div>
      <Button text="Back" onClick={() => navigate(-1)} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="First name"
          {...register("FirstName", { required: true })}
        />
        {errors.FirstName && <span>This field is required</span>}
        <input
          placeholder="Last name"
          {...register("LastName", { required: true })}
        />
        {errors.LastName && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default NewCustomerPage;
