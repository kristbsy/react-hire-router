import { NavLink } from "react-router-dom";
import { Person } from "../../../types";
import PeopleListItem from "./PeopleListItem";

function PeopleList(props: { people: Person[] }) {
  const { people } = props;

  return (
    <ul>
      {people.map((person, index) => (
        <NavLink to={`/view/${index}`} key={index}>
          <PeopleListItem person={person} />
        </NavLink>
      ))}
    </ul>
  );
}

export default PeopleList;
