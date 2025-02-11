import { FormEvent, useState } from "react";
import { HiredPerson, Person } from "../../../types";
import { useNavigate } from "react-router-dom";

function HireForm(props: {
  person: Person | HiredPerson;
  onHire: (person: HiredPerson) => void;
}) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.onHire({
      ...props.person,
      wage,
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
      <button type="submit">{"wage" in props.person ? "Edit" : "Hire"}</button>
    </form>
  );
}

export default HireForm;
