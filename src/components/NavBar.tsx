import Button from "./Button";
import { EXTERNAL_LINKS } from "../config";
import { useState, useEffect } from "react";

const SearchPage = () => {
  return(

    <div className="fixed bottom-0 left-0 right-0 bg-white z-50 p-4 h-[80%] text-black">
      Hello
    </div>
  )
}
const NavBar = () => {
  
  const [searchActive, toggleSearchActive] = useState(false);
  //const [navOpen, setNavOpen] = useState(false);

  const toggleSearch = () =>{
    console.log("toggled")
    toggleSearchActive(!searchActive);
  }
  
  useEffect(()=>{
    console.log("useeffect executed")
    if(searchActive){
      document.body.classList.add("overflow-hidden");
    }
    else{
      document.body.classList.remove("overflow-hidden");
    }
    return () =>{
      document.body.classList.remove("overflow-hidden");
    }
    
  },[searchActive])
  return (
      <>
      
      {/* Default Nav bar*/}      
      <nav className="font-bold text-lg pt-2 hidden md:block">
        <div className="flex justify-between items-center ">
          <h1 className="lg:text-xl">
            Portfolio Lens
          </h1>
          <div className="flex items-center space-x-10">
            <div>
              Home
            </div>
            <div>
              About
            </div>
            <div>
              Contact
            </div>
            <div>
              <Button 
                prefix={EXTERNAL_LINKS.githubLogo}
                altPrefix="github"
                onClick={() => { window.open(EXTERNAL_LINKS.github, "_blank");}}
                value="Source Code" 
                variant="tertiary"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile hamburger Nav bar*/}        
      <nav className="flex justify-between items-cente font-bold md:hidden pt-4">
        
          <>
          {/* Hamburger Icon */}
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>

          <h1>
            Portfolio Lens
          </h1>

          {/* Search Icon */}
          <button onClick={toggleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
          </button>
        </>
        {searchActive &&
        <>
        {/*BackDrop*/}
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSearch}>
        </div>
        <SearchPage/>
        </>}

      </nav>
        

      </>
  );
};

export default NavBar;
