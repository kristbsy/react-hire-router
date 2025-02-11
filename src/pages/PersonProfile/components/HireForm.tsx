import { FormEvent, useState } from "react";
import { HiredPerson, Person } from "../../../types";
import { useNavigate } from "react-router-dom";

function HireForm(props: {
  person: Person;
  onHire: (person: HiredPerson) => void;
}) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.onHire({
      wage,
      ...props.person,
    });
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="number"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.valueAsNumber)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
