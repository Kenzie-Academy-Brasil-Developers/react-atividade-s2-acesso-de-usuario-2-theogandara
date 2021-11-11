import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Costumer = ({members}) => {
  const { id } = useParams();

  const member = members.find((member)=> id === member.id)

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Costumer;
