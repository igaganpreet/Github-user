
export default function DisplayRepoData(props) {
console.log(props.info)
let data=props.info;
let i=1;
let displayRepos=data.map((item)=>{
    return(
        <div className="repoComponent">
            <div className="repoDetail">
              <h4 className="repoNumber">{i++}. </h4>
              <h4 className="repoName">{item.name}</h4>
            </div>
            <p className="repoUrl"><a href={item.html_url}>{item.html_url}</a></p>
        </div>
    )
})
    return (
      <div className="DisplayRepoData">
        {displayRepos}
      
      </div>
    );
  }
  