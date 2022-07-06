import Main from "./Main"
import Search from "./Search";
import React from "react"


function App() {
  let [searchText,updatesearchText]=React.useState("")
  let [userData,setUserData]=React.useState("igaganpreet")
  let [repoData, setRepoData]=React.useState("")
  let [isRepoButtonClicked, toggleIsRepoButtonClicked]=React.useState(false)

  const fetchData = (user) => {
    return fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }
  const fetchRepoData = (user) => {
    return fetch(`https://api.github.com/users/${user}/repos?q=addClass+user:mozilla&per_page=100`)
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
    toggleIsRepoButtonClicked(false)
  }
  function getUserRepo(){
    console.log("clicked")
    fetchRepoData(userData.login)
    toggleIsRepoButtonClicked((prev)=>!prev)
  }
  return (
    <div className="App">
      <Search 
          searchUser={searchUser}
          getSearchVal={getSearchVal}
          // getUserRepo={getUserRepo}
           />
      <Main 
          info={userData}
          getUserRepo={getUserRepo}
          isRepoButtonClicked={isRepoButtonClicked}
          repoData={repoData} />
    </div>
  );
}

export default App;
