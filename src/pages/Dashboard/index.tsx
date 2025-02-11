import { useEffect, useState } from "react";
import PeopleList from "./components/PeopleList";
import { HiredPerson, Person } from "../../types";
import HiredPeopleList from "./components/HiredPeopleList";

function Dashboard(props: { hiredPeople: HiredPerson[]; people: Person[] }) {
  const { hiredPeople, people } = props;

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <HiredPeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
