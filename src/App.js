import Main from "./Main"
import Search from "./Search";
import React from "react"
import DisplayRepoData from "./DisplayRepoData";


function App() {
  let [searchText,updatesearchText]=React.useState("")
  let [userData,setUserData]=React.useState("igaganpreet")
  let [repoData, setRepoData]=React.useState("")
  const fetchData = (user) => {
    return fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }
  const fetchRepoData = (user) => {
    return fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => setRepoData(data));
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  function getSearchVal(event){
    updatesearchText(event.target.value)
  }
  function searchUser(){
    fetchData(searchText)
  }
  function getUserRepo(){
    fetchRepoData(searchText)
  }
  return (
    <div className="App">
      <Search 
          searchUser={searchUser}
          getSearchVal={getSearchVal}
          // getUserRepo={getUserRepo}
           />
      <Main 
          info={userData} />
        {/* <DisplayRepoData info={repoData}/> */}
    </div>
  );
}

export default App;
