import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

function Navbar() {
  return (
    <navbar className = "navbar">
      <div className = "nav-wrapper">
        <img src = {require("./img/logo.PNG")} className = "brand-img" alt = ""></img>
        <input type="text" class="search-box" placeholder="search"></input>
        <div className="nav-items">
          <img src = {require("./img/home.PNG")} class = "icon" alt = ""></img>
          <img src = {require("./img/messenger.PNG")} class = "icon" alt = ""></img>
          <img src = {require("./img/add.PNG")} class = "icon" alt = ""></img>
          <img src = {require("./img/explore.PNG")} class = "icon" alt = ""></img>
          <img src = {require("./img/like.PNG")} class = "icon" alt = ""></img>
          <div class="icon user-profile"></div>
        </div>
      </div>
    </navbar>
  );
}

function Main() {
  return (
    <section className = "main">
          <Wrapper />
    </section>
  );
}

function Wrapper() {
  return (
    <div className = "wrapper">
      <LeftCol />
      <RightCol />
    </div>
  );
}

function LeftCol() {
  const numberCards = [1, 2, 3, 4, 5, 6, 7, 8];
  const numberPosts = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13];
  return (
    <div className = "left-col">
      <div className = "status-wrapper">
      {numberCards.map((number) => (
        <StatusCard number = {number} />
      ))}
      </div>
      {numberPosts.map((number) => (
        <Post number = {number} />
      ))}
    </div>
  );
}

function StatusCard({number}) {
  return (
    <div className = "status-card">
      <div className = "profile-pic">
        <img src = {require(`./img/cover ${number}.png`)} alt = ""></img>
      </div>
      <p class = "username">username-{number}</p>
    </div>
  );
}

function Post({number}) {
  return (
    <div className = "post">
      <div className = "info">
        <div className = "user">
          <div className = "profile-pic">
            <img src = {require(`./img/cover ${number}.png`)} alt = ""></img>
          </div>
          <p className = "username">username-{number}</p>
        </div>
        <img src = {require(`./img/option.PNG`)} className = "option" alt = ""></img>
      </div>
      <img src = {require(`./img/cover ${number}.png`)} className = "post-image" alt = ""></img>
      <div className = "post-content">
        <div className = "reaction-wrapper">
          <img src = {require("./img/like.PNG")} class = "icon" alt = ""></img>
          <img src = {require("./img/comment.PNG")} class = "icon" alt = ""></img>
          <img src = {require("./img/send.PNG")} class = "icon" alt = ""></img>
          <img src = {require("./img/save.PNG")} class = "save icon" alt = ""></img>
        </div>
        <p className = "likes">1,069 likes</p>
        <p className = "description">
          <span>username-{number}</span>
          "Lorem ipsum"
        </p>
        <p className = "post-time">2 minutes ago</p>
      </div>
      <div className="comment-wrapper">
        <img src = {require(`./img/smile.PNG`)} className = "icon" alt = ""></img>
        <input type="text" class="comment-box" placeholder="Add a comment"></input>
        <button className="comment-btn">post</button>
      </div>
    </div>
  );
}

function RightCol() {
  const numberSubProfiles = [7, 8, 9, 10, 11, 12, 13]
  return (
    <div className = "right-col">
      <ProfileCard />
      <Suggestion />
      {numberSubProfiles.map((number) => (
        <ProfileCardSub number = {number} />
      ))}
    </div>
  );
}

function ProfileCard() {
  return (
    <div className = "profile-card">
      <div className = "sub-profile-card">
        <div className = "profile-pic">
        <img src = {require(`./img/cover 7.png`)} alt = ""></img>
        </div>
        <div>
          <p className = "username">username</p>
          <p className = "sub-text">name</p>
        </div>
      </div>
      <button className = "action-btn">switch</button>  
    </div>
  );
}

function Suggestion() {
  return (
    <div className = "suggestion">
      <p className = "suggestion-text">Suggestions for you</p>
      <button className = "action-btn suggest">See All</button>  
    </div>
  );
}

function ProfileCardSub({number}) {
  return (
    <div className = "profile-card sub">
      <div className = "sub-profile-card">
        <div className = "profile-pic">
          <img src = {require(`./img/cover ${number}.png`)} alt = ""></img>
        </div>
        <div>
          <p className = "username">username-{number}</p>
          <p className = "sub-text">followed by user</p>
        </div>
      </div>
      <button className = "action-btn">Follow</button>
    </div>
  );
}

export default App;
