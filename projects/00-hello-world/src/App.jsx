import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";
const App = () => {
  return (
    <section id="App">
      <TwitterFollowCard isFollowing username="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing username="samarj_h">
        Samar Jaffal
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing username="dg0397">
        Dionisio Gonzalez
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing username="wesbos">
        Wes Bos
      </TwitterFollowCard>
    </section>
  );
};

export default App;
