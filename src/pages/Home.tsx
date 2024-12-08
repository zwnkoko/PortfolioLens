import NavBar from "../components/NavBar";
import Button from "../components/Button";

const Home = () => {

  return (
    <div className="lg:max-w-7xl mx-auto px-6 min-h-dvh flex flex-col">

      <header>
        <NavBar />
      </header>

      <main className="flex flex-col justify-center items-center flex-grow">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center text-2xl md:text-6xl">
          Minimalistic Portfolio Tracker for Retail Investors
        </p>
        <Button value="Get Started"/>
      </main>

    </div>
  );
};

export default Home;
