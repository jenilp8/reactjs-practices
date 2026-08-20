function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">

        {/* Logo + Navigation */}
        <div className="flex items-center gap-10">
          <a href="#" className="text-2xl font-bold text-blue-600">
            MyLogo
          </a>

          <ul className="list-none flex items-center gap-6">
            <li>
              <a className="text-gray-700 hover:text-blue-600 transition-colors" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-blue-600 transition-colors" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-blue-600 transition-colors" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-blue-600 transition-colors" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Authentication */}
        <ul className="list-none flex items-center gap-6">
          <li>
            <a className="text-gray-700 hover:text-blue-600 transition-colors" href="#">
              Login
            </a>
          </li>
          <li>
            <a
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              href="#"
            >
              SignUp
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;