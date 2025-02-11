import { NavLink } from "react-router-dom";
import { HiredPerson } from "../../../types";
import HiredPeopleListItem from "./HiredPeopleListItem";

function PeopleList(props: { people: HiredPerson[] }) {
  const { people } = props;

  return (
    <ul>
      {people.map((person, index) => (
        <HiredPeopleListItem person={person} key={index} />
      ))}
    </ul>
  );
}

export default PeopleList;
