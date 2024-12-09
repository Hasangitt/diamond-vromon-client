// import { useContext, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../Auth/AuthContext";

// const NavBar = () => {
//   const { user, userLogOut } = useContext(AuthContext);
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State for outer dropdown
//   const [innerDropdownOpen, setInnerDropdownOpen] = useState(false); // State for inner dropdown
//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const toggleInnerDropdown = () => {
//     setInnerDropdownOpen(!innerDropdownOpen);
//   };

//   const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

//   const handleUserLogOut = () => {
//     userLogOut()
//       .then((result) => {
//         console.log(result.user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div
//       className={`navbar sticky top-0 z-50 transition-all duration-1000 ${
//         scrolled ? "backdrop-blur-md shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="navbar-start">
//         <div className="dropdown relative z-10">
//           {/* Toggle Button for Small Screens */}
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost lg:hidden "
//             onClick={toggleDropdown}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>

//           {/* Outer Dropdown Menu */}
//           {dropdownOpen && (
//             <ul
//               tabIndex={0}
//               className=" menu menu-sm dropdown-content bg-transparent rounded-box z-[1] mt-3 w-40 p-2 space-y-2"
          
//             >
//               <NavLink to="/">
//                 <button className="backdrop-blur-sm roboto-slab-uniquifier w-36 p-2 border border-black text-white font-semibold hover:bg-blue-500">

//                   Home
//                 </button>
//               </NavLink>
//               <NavLink to="/all-spot">
//                 <button className=" backdrop-blur-sm roboto-slab-uniquifier w-36 p-2 border border-black text-white hover:bg-blue-500">
//                   All Tourist Spots
//                 </button>
//               </NavLink>
//               <div className="dropdown dropdown-right">
//                 {/* Inner Dropdown Toggle */}
//                 <div
//                   tabIndex={0}
//                   role="button"
//                   className="backdrop-blur-sm roboto-slab-uniquifier w-36 p-2 border border-black text-white hover:bg-blue-500"
//                   onClick={toggleInnerDropdown}
//                 >
//                   <span>Countries For Visit</span>
//                 </div>
//                 {/* Inner Dropdown Menu */}
//                 {innerDropdownOpen && (
//                   <ul
//                     tabIndex={0}
//                     className="dropdown-content menu bg-transparent rounded-box z-[1] space-y-2"
//                   >
//                     <NavLink to="/bangladesh">
//                       <button className="backdrop-blur-sm roboto-slab-uniquifier w-36 p-2 border border-black text-white hover:bg-yellow-600">
//                         Bangladesh
//                       </button>
//                     </NavLink>
//                     <NavLink to="/thailand">
//                       <button className=" backdrop-blur-sm roboto-slab-uniquifier w-36 p-2 border border-black text-white hover:bg-yellow-600">
//                         Thailand
//                       </button>
//                     </NavLink>
//                   </ul>
//                 )}
//               </div>
//               <NavLink to="/add-spot">
//                 <button className=" backdrop-blur-sm roboto-slab-uniquifier w-36  p-2 border border-black text-white hover:bg-blue-500">
//                   Add Tourist Spot
//                 </button>
//               </NavLink>
//               <NavLink to="/my-spot-list">
//                 <button className="w-36 backdrop-blur-sm p-2 border border-black text-white hover:bg-blue-500">
//                   My List
//                 </button>
//               </NavLink>
//               {user ? (
//                 <NavLink>
//                   <button
//                     onClick={handleUserLogOut}
//                     className=" backdrop-blur-sm w-36 p-2 border border-black text-white hover:bg-blue-500"
//                   >
//                     Log Out
//                   </button>
//                 </NavLink>
//               ) : (
//                 <NavLink to="/login">
//                   <button className=" backdrop-blur-sm w-36 p-2 border border-black text-white hover:bg-blue-500">
//                     Login
//                   </button>
//                 </NavLink>
//               )}
//             </ul>
//           )}
//         </div>
//         <NavLink to="/">
//           <h2
//             className={`kaushan-script-regular text-4xl ${
//               scrolled ? "text-white" : "text-black"
//             }`}
//           >
//             Vizit Asia
//           </h2>
//         </NavLink>
//       </div>

//       <div className="navbar-center hidden lg:flex relative z-10">
//         <ul className="menu menu-horizontal gap-8 items-center">
//           <NavLink to="/">
//             <button className="border px-12 py-2 bg-blue-500 hover:bg-blue-800 text-white font-semibold">
//               Home
//             </button>
//           </NavLink>
//           <NavLink to="/all-spot">
//             <button className="border px-12 py-2 bg-blue-500 hover:bg-blue-800 text-white font-semibold">
//               {" "}
//               All Tourist Spots
//             </button>
//           </NavLink>
//           <div className="dropdown dropdown-hover ">
//             <div
//               tabIndex={0}
//               role="button"
//               className=" px-12 py-2 bg-blue-500 hover:bg-blue-800 text-white font-semibold"
//             >
//               Countries for visit
//             </div>
//             <ul
//               tabIndex={0}
//               className="dropdown-content menu bg-transparent rounded-box z-[1] w-48 p-2 space-y-2"
//             >
//               <NavLink to="/bangladesh">
//                 <button className="border w-full px-12 py-2 bg-blue-500 hover:bg-blue-800 text-white font-semibold">
//                   Bangladesh
//                 </button>
//               </NavLink>
//               <NavLink to="/thailand">
//                 <button className="border w-full px-12 py-2 bg-blue-500 hover:bg-blue-800 text-white font-semibold">
//                   Thailand
//                 </button>
//               </NavLink>
//             </ul>
//           </div>
//           <NavLink to="/add-spot">
//             <button className="border px-12 py-2 bg-blue-500 hover:bg-blue-800 text-white font-semibold">
//               Add Tourist Spot
//             </button>
//           </NavLink>
//           <NavLink to="/my-spot-list">
//             <button className="border px-12 py-2 bg-blue-500 hover:bg-blue-800 text-white font-semibold">
//               My List
//             </button>
//           </NavLink>
//         </ul>
//       </div>
//       <div className="navbar-end">
//         {user ? (
//           <NavLink>
//             <button
//               onClick={handleUserLogOut}
//               className=" backdrop-blur-sm w-36 p-2 border border-blue-500 hover:text-white text-black roboto-slab-uniquifier hover:bg-blue-500"
//             >
//               Log Out
//             </button>
//           </NavLink>
//         ) : (
//           <NavLink to="/login">
//             <button className=" backdrop-blur-sm w-36 p-2 border border-black text-black roboto-slab-uniquifier hover:bg-blue-500">
//               Login
//             </button>
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import "../Styles/NavBar.css";

const NavBar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for sidebar
  const [innerDropdownOpen, setInnerDropdownOpen] = useState(false); // State for inner dropdown
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleInnerDropdown = () => {
    setInnerDropdownOpen(!innerDropdownOpen);
  };

  const handleUserLogOut = () => {
    userLogOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar sticky top-0 z-40 transition-all duration-500 ${
        scrolled ? "backdrop-blur-lg border border-base-100 shadow-lg" : "bg-white"
      }`}
    >
      {/* Sidebar Overlay */}
      {dropdownOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-base-100 text-white transition-transform transform z-50 lg:hidden w-64 ${
          dropdownOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 text-lg font-bold">Menu</div>
        <ul className="p-4 space-y-4">
          <NavLink to="/" onClick={toggleSidebar}>
            <li className="py-2 px-4 hover:bg-blue-700 rounded">Home</li>
          </NavLink>
          <NavLink to="/allSpot" onClick={toggleSidebar}>
            <li className="py-2 px-4 hover:bg-blue-700 rounded">
              All Tourist Spots
            </li>
          </NavLink>
          <div>
            <button
              className="py-2 px-4 w-full text-left hover:bg-blue-700 rounded"
              onClick={toggleInnerDropdown}
            >
              Countries for Visit
            </button>
            {innerDropdownOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <NavLink to="/bangladesh" onClick={toggleSidebar}>
                  <li className="py-2 px-4 hover:bg-yellow-600 rounded">
                    Bangladesh
                  </li>
                </NavLink>
                <NavLink to="/thailand" onClick={toggleSidebar}>
                  <li className="py-2 px-4 hover:bg-yellow-600 rounded">
                    Thailand
                  </li>
                </NavLink>
              </ul>
            )}
          </div>
          <NavLink to="/add-spot" onClick={toggleSidebar}>
            <li className="py-2 px-4 hover:bg-blue-700 rounded">
              Add Tourist Spot
            </li>
          </NavLink>
          <NavLink to="/my-spot-list" onClick={toggleSidebar}>
            <li className="py-2 px-4 hover:bg-blue-700 rounded">My List</li>
          </NavLink>
          {user ? (
            <button
              onClick={() => {
                handleUserLogOut();
                toggleSidebar();
              }}
              className="py-2 px-4 w-full text-left hover:bg-blue-700 rounded"
            >
              Log Out
            </button>
          ) : (
            <NavLink to="/login" onClick={toggleSidebar}>
              <li className="py-2 px-4 hover:bg-blue-700 rounded">Login</li>
            </NavLink>
          )}
        </ul>
      </div>

      {/* Navbar Header */}
      <div className="navbar-start flex items-center">
        <button
          className="btn btn-ghost lg:hidden z-50"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${dropdownOpen ? "text-white" : "text-black"} `}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <NavLink to="/">
          <h2
            className={`kaushan-script-regular text-4xl ${
              scrolled ? "text-blue-500" : "text-black"
            }`}
          >
            Vizit Asia
          </h2>
        </NavLink>
      </div>

      {/* Navbar for Larger Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8">
          <NavLink to="/">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded">
              Home
            </button>
          </NavLink>
          <NavLink to="/allSpot">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded">
              All Tourist Spots
            </button>
          </NavLink>
          <div className="dropdown dropdown-hover">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded">
              Countries for Visit
            </button>
            <ul className="dropdown-content menu p-2 space-y-2 mt-1 bg-white shadow rounded">
              <NavLink to="/bangladesh">
                <li className="py-2 px-4 hover:bg-blue-500 rounded">
                  Bangladesh
                </li>
              </NavLink>
              <NavLink to="/thailand">
                <li className="py-2 px-4 hover:bg-blue-500 rounded">
                  Thailand
                </li>
              </NavLink>
            </ul>
          </div>
          <NavLink to="/add-spot">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded">
              Add Tourist Spot
            </button>
          </NavLink>
          <NavLink to="/my-spot-list">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded">
              My List
            </button>
          </NavLink>
        </ul>
      </div>

      {/* User Auth Button */}
      <div className="navbar-end hidden lg:block">
        {user ? (
          <button
            onClick={handleUserLogOut}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded"
          >
            Log Out
          </button>
        ) : (
          <NavLink to="/login">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;




