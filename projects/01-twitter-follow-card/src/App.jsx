import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "samarj_h",
    name: "Samar Jaffal",
    isFollowing: true,
  },
  {
    userName: "dg0397",
    name: "Dionisio Gonzalez",
    isFollowing: false,
  },
  {
    userName: "wesbos",
    name: "Wes Bos",
    isFollowing: true,
  },
];

const App = () => {
  return (
    <section id="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          username={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
};

export default App;
