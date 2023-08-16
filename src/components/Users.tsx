import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res: User[]) => setUsers(res));
  }, []);

  function addUser() {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: `user ${Math.random() * 10}` }),
    })
      .then((res) => res.json())
      .then((res) => setUsers((s) => [...s, res]));
  }

  return (
    <>
      <h2>B - Lista con fetch</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={addUser}>Add</button>
    </>
  );
};
