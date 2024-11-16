import Button from "../components/Button";
import NavBar from "../components/NavBar";
import { EXTERNAL_LINKS } from "../config";

const Home = () => {
  const handleGhubClick = () => {
    window.open(EXTERNAL_LINKS.github, "_blank"); // Opens the GitHub link in a new tab
  };
  return (
    <div className="bg-blue-100 bg-gradient-to-b from-[#0a0f24] to-[#1c1c1e] min-h-dvh flex flex-col">
      <header>
        <NavBar />
      </header>
      <main className="flex flex-col justify-center items-center flex-grow">
        <h1 className="text-white font-bold text-3xl lg:text-6xl">
          Portfolio Lens
        </h1>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-xs lg:text-xl">
          Simple & Minimalistic portfolio tracker app for retail investors
        </p>
        <Button
          value="Source Codes"
          prefix="src/assets/github-mark-white.svg"
          onClick={handleGhubClick}
          variant="tertiary"
        />
      </main>
    </div>
  );
};

export default Home;
