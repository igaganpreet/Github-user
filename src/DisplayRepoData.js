// import {AiFillGithub} from "react-icons/ai"

export default function DisplayRepoData(props) {
console.log(props.info)
let data=props.info
let displayRepos=data.map((item)=>{
    return(
        <div>
            <h4>{item.name}</h4>
            <p>{item.html_url}</p>
        </div>
    )
})
    return (
      <div className="DisplayRepoData">
        <h3>{props.info.name}</h3>
        <p>{props.info.html_url}</p>
        {displayRepos}
      </div>
    );
  }
  