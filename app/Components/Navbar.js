export default function Navbar() {
  return (
    <div className="navbar bg-[#2C3639] text-white shadow-md px-10">
      {/* Left Section */}
      <div className="flex-1">
        <a className=" normal-case text-2xl">BookStore</a>
      </div>

      {/* Right Section */}
      <div className="flex-none">
        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn  btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Categories</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li><a>Home</a></li>
          <li><a>Categories</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

