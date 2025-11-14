import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <br></br>
      <br />
      <h1 className="text-4xl font-bold mb-8">Welcome to Kyojin</h1>

      <Link
        to="/analysis"
        className="relative px-8 py-4 text-lg font-semibold transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: "#1c1c1c",
          color: "white",
          borderRadius: "10px", // full round shape
          border: "1px solid #ffffffff",
          boxShadow: "0 0 0px #ffffffff, 0 0 0px #ffffffff",
          textDecoration: "none",
          display: "inline-block",
          padding: "10px"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 10px #ffffffff, 0 0 0px #ffffffff";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 0px #ffffffff, 0 0 0px #ffffffff";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        Try Analysis
      </Link>
    </div>
  );
}

export default Home;
