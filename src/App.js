import Main from "./Main"
import Search from "./Search";
import React from "react"

function App() {
  const fetchData = () => {
    return fetch(`https://api.github.com/users/${"igaganpreet"}`)
      .then((response) => response.json())
      .then((data) => console.log(data.name));
  }
  React.useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="App">
      <Search />
      <Main />
    </div>
  );
}

export default App;
