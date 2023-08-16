const users = [
  { id: 1, nome: "Pippo" },
  { id: 1, nome: "Pluto" },
  { id: 1, nome: "Paperino" },
];

export const Users = () => {
  return (
    <>
      <h1>Lista</h1>{" "}
      {users.map((user) => {
        return <li key={user.id}> {user.nome} </li>;
      })}
    </>
  );
};
