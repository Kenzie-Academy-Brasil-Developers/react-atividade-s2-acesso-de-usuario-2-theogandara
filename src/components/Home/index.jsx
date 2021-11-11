import { Link } from "react-router-dom";

const Home = ({ members }) => {
  return members.map((member) => (
    <Link
      key={member.id}
      id={member.id}
      to={`/${member.type === "pj" ? "company" : "costumer"}/${member.id}`}
    >
      {member.name}
    </Link>
  ));
};

export default Home;
