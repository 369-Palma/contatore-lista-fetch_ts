const users = [
  { id: 1, nome: "Pippo" },
  { id: 1, nome: "Pluto" },
  { id: 1, nome: "Paperino" },
];

export const Users = () => {
  return (
    <>
      <h2>B - Lista</h2>{" "}
      {users.map((user) => {
        return <li key={user.id}> {user.nome} </li>;
      })}
    </>
  );
};
