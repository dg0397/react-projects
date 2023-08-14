import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { ListTwitterFollowCard } from "./Components/ListTwitterFollowCard";

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
      <Header />
      <ListTwitterFollowCard users={users} />
      <Footer />
    </section>
  );
};

export default App;
