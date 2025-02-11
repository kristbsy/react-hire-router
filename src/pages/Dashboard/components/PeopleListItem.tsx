import { Person } from "../../../types";

function PeopleListItem(props: { person: Person }) {
  const { person } = props;

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
    </li>
  );
}

export default PeopleListItem;
