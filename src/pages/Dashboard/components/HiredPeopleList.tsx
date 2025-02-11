import { HiredPerson } from "../../../types";
import HiredPeopleListItem from "./HiredPeopleListItem";

function PeopleList(props: { people: HiredPerson[] }) {
  const { people } = props;

  return (
    <ul>
      {people.map((person) => (
        <HiredPeopleListItem person={person} key={person.id} />
      ))}
    </ul>
  );
}

export default PeopleList;
