import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { HiredPerson, Person } from "../../types";
import { useParams } from "react-router-dom";

function invariant(value: unknown): asserts value {
  if (value) return;

  throw new Error("Invariant violation");
}

function PersonProfile({
  people,
  onHire,
}: {
  people: Person[];
  onHire: (person: HiredPerson) => void;
}) {
  const [person, setPerson] = useState<Person | null>(null);

  let { id } = useParams();

  useEffect(() => {
    if (id == undefined) {
      return;
    }
    try {
      const parsedId = parseInt(id);
      setPerson(people[parsedId]);
    } catch {
      return;
    }
  });

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} onHire={onHire} />
    </article>
  );
}

export default PersonProfile;
