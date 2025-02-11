import { useEffect, useState } from "react";
import "./App.css";
import { HiredPerson, Person } from "./types";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

async function getPeople(): Promise<Person[]> {
  const people_response = await (
    await fetch("https://randomuser.me/api/?results=50")
  ).json();
  const people = people_response.results as Person[];
  return people;
}

export default function App() {
  const [hiredPeople, setHiredPeople] = useState<HiredPerson[]>([]);
  const [people, setPeople] = useState<Person[]>([]);

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
              onHire={(person) => setHiredPeople([...hiredPeople, person])}
            />
          }
        />
      </Routes>
    </>
  );
}
