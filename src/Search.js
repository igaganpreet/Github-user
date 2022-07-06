
export default function Search(props) {



    return (
      <div className="Search">
        <div className="searchBar">
            <input className="searchInput" placeholder="Enter Name Here" onChange={props.getSearchVal}></input>
            <button className="searchButton" onClick={props.searchUser}>Search</button>
        </div>
      </div>
    );
  }
  