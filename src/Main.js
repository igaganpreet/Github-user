import {AiFillGithub} from "react-icons/ai"
import {IoLocationSharp} from "react-icons/io5"
import {BiLink} from "react-icons/bi"
import {FiTwitter, FiUsers} from "react-icons/fi"
import {MdPeopleAlt} from "react-icons/md"
import {BsDot} from "react-icons/bs"
import DisplayRepoData from "./DisplayRepoData"

export default function Main(props) {
let user=props.info
let width=window.innerWidth;
let calcMargin=(props.isRepoButtonClicked) ? "1% 2%" : "auto"
let mainMargin=(width>480)?calcMargin: "0%"
    return (
     
      <div>
        {user.name ? (
          // <div className="Main" style={{margin:(props.isRepoButtonClicked) ? "1% 2%" : "auto"}}>
          <div className="MainDisplay">
            <div className="Main" style={{margin:mainMargin}}>
              <img alt="profileImage" className="userImage" src={props.info.avatar_url} ></img>
              <div className="mainUserData">
                <h1 className="name">{user.name}</h1>
                <h3 className="username">{user.login}</h3>
                <p className="bio">{user.bio}</p>
                <p className="userDataDesc"><AiFillGithub className="userDataIcon" />{user.html_url}</p>
                {user.location ? <p className="userDataDesc"><IoLocationSharp className="userDataIcon" />{user.location}</p>:""}
                {user.blog ? <p className="userDataDesc"><BiLink className="userDataIcon" />{user.blog}</p> : ""}
                {user.twitter_username ? <p className="userDataDesc"><FiTwitter className="userDataIcon" />{user.twitter_username}</p>: ""}
                <p className="userDataDesc"><MdPeopleAlt className="userDataIcon" />{user.followers} followers <BsDot /> {user.following} following </p>
                <button className="showRepo" onClick={props.getUserRepo}>{props.isRepoButtonClicked ? "Hide Repositories": "Show Repositories"}</button>
              </div>
          </div>
          {props.isRepoButtonClicked ? <DisplayRepoData info={props.repoData} />:""}
        </div>
        )
        :
        <div className="MainDisplay">
            <div className="Main" style={{margin:mainMargin}}>
              <img alt="" className="userImage" src="" ></img>
              <div className="mainUserData">
                <h1 className="name"></h1>
                <h3 className="username"></h3>
                <p className="bio"></p>
                <p className="userDataDesc"><AiFillGithub className="userDataIcon" /></p>
                {user.location ? <p className="userDataDesc"><IoLocationSharp className="userDataIcon" /></p>:""}
                {user.blog ? <p className="userDataDesc"><BiLink className="userDataIcon" /></p> : ""}
                {user.twitter_username ? <p className="userDataDesc"><FiTwitter className="userDataIcon" />{user.twitter_username}</p>: ""}
                <p className="userDataDesc"><MdPeopleAlt className="userDataIcon" />-- followers <BsDot /> -- following </p>
           </div>
           </div>
           </div>
        }
      </div> 
      
    );
  }
  
