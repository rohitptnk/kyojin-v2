import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex">
      <br></br>
      <br />
      <br />
      <h1 className="text-4xl font-bold mb-5 mt-5">Welcome to Kyojin</h1>

      <Link to="/analysis" className="my-button">
        Try Analysis
      </Link>

      <Link to="/rag" className="my-button">
        Try DocChat
      </Link>
    </div>
  );
}

export default Home;
