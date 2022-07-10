
export default function DisplayRepoData(props) {
console.log(props.info)
let data=props.info;
let i=1;
let displayRepos=data.map((item)=>{
    return(
        <div>
          <h4>{i++}</h4>
            <h4>{item.name}</h4>
            <p>{item.html_url}</p>
        </div>
    )
})
    return (
      <div className="DisplayRepoData">
<div>Repos</div>
        {displayRepos}
      
      </div>
    );
  }
  