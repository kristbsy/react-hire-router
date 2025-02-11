import { useEffect, useState } from "react";
import HireForm from "./components/HireForm";
import { HiredPerson, Person } from "../../types";
import { useParams } from "react-router-dom";

function PersonProfile({
  people,
  hiredPeople,
  onHire,
}: {
  people: Person[];
  hiredPeople: HiredPerson[];
  onHire: (person: HiredPerson) => void;
}) {
  const [person, setPerson] = useState<Person | HiredPerson | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (id == undefined) {
      return;
    }
    try {
      const parsedId = parseInt(id);
      const hiredIndex = hiredPeople.findIndex((p) => p.id == parsedId);
      if (hiredIndex !== -1) {
        setPerson(hiredPeople[hiredIndex]);
      } else {
        setPerson(people[parsedId]);
      }
    } catch {
      return;
    }
  }, [id, people, hiredPeople]);

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
