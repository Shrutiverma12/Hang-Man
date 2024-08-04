import { Link } from "react-router-dom";
function GameOver() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-80 w-full bg-gray-100 fixed top-20  right-0 m-4 ml-4  border-solid border-2 border-sky-500">
        <h1 className="text-4xl font-bold mb-4">Game Over</h1>
        <p className="text-lg">Thank you for playing!</p>
        <Link
          to="/start"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mt-4"
        >
          Restart Game
        </Link>
      </div>
    </>
  );
}
export default GameOver;
