import { useEffect, useState } from "react";
import "./App.css";
import { HiredPerson, Person } from "./types";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

async function getPeople(): Promise<Person[]> {
  const people_response = await (
    await fetch("https://randomuser.me/api/?results=50")
  ).json();
  const people = people_response.results as {
    name: { first: string; last: string };
  }[];
  return people.map((p, id) => ({ ...p, id } as Person));
}

export default function App() {
  const [hiredPeople, setHiredPeople] = useState<HiredPerson[]>([]);
  const [people, setPeople] = useState<Person[]>([]);

  const updateHired = (hire: HiredPerson) => {
    const h = hiredPeople.find((hp) => hp.id === hire.id);
    if (h == undefined) {
      setHiredPeople([...hiredPeople, hire]);
    } else {
      setHiredPeople((h) =>
        h.map((hiredPerson) => {
          if (hiredPerson.id === hire.id) {
            return { ...hiredPerson, wage: hire.wage };
          } else {
            return hiredPerson;
          }
        })
      );
    }
  };

  useEffect(() => {
    getPeople().then((people) => {
      setPeople(people);
      console.log(people);
    });
  }, []);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <NavLink to="/">
              <li>Dashboard</li>
            </NavLink>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={people}
              hiredPeople={hiredPeople}
              onHire={updateHired}
            />
          }
        />
      </Routes>
    </>
  );
}
