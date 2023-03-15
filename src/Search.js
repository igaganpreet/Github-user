
export default function Search(props) {
  
    return (
      <div className="Search" style={{marginTop:(props.isRepoButtonClicked) ? "2%" : "6%"}}>
        <div className="searchBar">
            <input className="searchInput" placeholder="Enter user name here" onChange={props.getSearchVal}></input>
            <button className="searchButton" onClick={props.searchUser}>Search</button>
        </div>
      </div>
    );
  }
  
