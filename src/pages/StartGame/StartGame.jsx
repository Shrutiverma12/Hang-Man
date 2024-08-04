import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFromContainer";

function StartGame() {
  const navigate = useNavigate();

  function handleSubmit(value) {
    navigate("/play", { state: { wordSelected: value } });
  }

  return (
    <div>
      <h1 className="text-4xl text-center text-red-500">Start Game</h1>
      <TextInputFormContainer onSubmit={handleSubmit} />
    </div>
  );
}
export default StartGame;
