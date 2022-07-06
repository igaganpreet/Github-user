import {AiFillGithub} from "react-icons/ai"
import {IoLocationSharp} from "react-icons/io5"

export default function Main(props) {
console.log(props.info)
    return (
      <div className="Main">
        <img alt="profileImage" className="userImage" src={props.info.avatar_url} ></img>
        <div className="mainData">
          <h1>{props.info.name}</h1>
          <h3>{props.info.login}</h3>
          <p>{props.info.bio}</p>
          <p><AiFillGithub />{props.info.html_url}</p>
          <p><IoLocationSharp />{props.info.location}</p>
        </div>
      </div>
    );
  }
  