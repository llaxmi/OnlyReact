import { useQuery } from "react-query";
import "./App.css";

const App = () => {
  //useQuery hook is used to fetch and manage data with REACT QUERY
  const users = useQuery(
    "users",
    () => {
      return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      );
    },
    { enabled: false } //query disabled initially
  );

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => users.refetch()}>Load users</button>
        <div>
          {users.isFetching && <div>Fetching users...</div>}
          {users.isError && <div>Error Fetching users!!!</div>}
          {users.data &&
            users.data.length > 0 &&
            users.data.map((user) => (
              <div className="listofusers" key={user.id}>
                {user.name}
              </div>
            ))}
        </div>
      </header>
    </div>
  );
};

export default App;
