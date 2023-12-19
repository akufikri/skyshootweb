import { Link } from "react-router-dom"

const Navbar = () => {
      return (
            <>
                  <div className="navbar bg-base-100 fixed z-10 sm:py-4 px-4">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                          <li><a>Item 1</a></li>
                                          <li><a>Item 3</a></li>
                                    </ul>
                              </div>
                              <div className="px-5">
                                    <span className="font-medium text-xl">SkyShoot</span>
                              </div>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                    <li><Link to='/'>Home</Link></li>
                                    <li>
                                          <details>
                                                <summary>Shopping</summary>
                                                <ul className="w-40 mt-5 border">
                                                      <li><Link to='/shoping/privat-shoot' className="text-sm">Privat Shoot</Link></li>
                                                      <li><a className="text-sm">Sewa Kamera</a></li>
                                                </ul>
                                          </details>
                                    </li>

                              </ul>
                        </div>
                        <div className="navbar-end">
                              <a className="btn">Log In</a>
                        </div>
                  </div>
            </>
      )
}
export default Navbar