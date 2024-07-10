import { Link } from "react-router-dom";
import logo from "../assets/images/website-logo.png";
import { Icon } from "@iconify/react";
import { useState } from "react";
import './Header.css'
export default function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <header className="md:flex hidden justify-between items-center fixed w-full z-50 bg-[#DAEDC0] top-0 md:p-5 p-3 lg-md-header">
        <div>
          <Link to="/">
          <img
            className="md:w-[170px] w-[100px] md:h-[100px] h-[50px]"
            src={logo}
            alt="site logo"
          />
          </Link>
        </div>

        <ul className="md:flex items-center lg:gap-10 md:gap-5 hidden text-[1.25rem] font-semibold">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="md:flex items-center lg:gap-10 md:gap-5 hidden text-[1.25rem] font-semibold">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </header>

      {/* Mobile Menu  */}
      <header className="md:hidden block bg-[#8cc73a52] relative">
        <div className="flex justify-between items-center p-2">
          <img
            className="md:w-[170px] w-[100px] md:h-[100px] h-[50px]"
            src={logo}
            alt="site logo"
          />
          {visible ? (
            <Icon
              onClick={()=>setVisible(!visible)}
              className="text-5xl text-[#0a943f] hover:text-[#0a943f] cursor-pointer"
              icon="maki:cross"
            />
          ) : (
            <Icon
              onClick={()=>setVisible(!visible)}
              className="text-5xl text-[#0a943f] hover:text-[#0a943f] cursor-pointer"
              icon="mingcute:menu-fill"
            />
          )}
        </div>

        <div className={`bg-[#0a943f] absolute z-50 w-full space-y-14 text-white duration-300 ${visible ? 'left-0' : 'left-[-9000px]'}`}>
          <ul>
            <li className="w-full border-b-[1px] border-b-[#8cc73a57] hover:bg-[#166634] duration-300">
              <Link className="block w-full p-3" to="/home">Home</Link>
            </li>
            <li className="w-full border-b-[1px] border-b-[#8cc73a57] hover:bg-[#166634] duration-300">
              <Link className="block w-full p-3" to="/faq">FAQ</Link>
            </li>
            <li className="w-full border-b-[1px] border-b-[#8cc73a57] hover:bg-[#166634] duration-300">
              <Link className="block w-full p-3" to="/products">Products</Link>
            </li>
            <li className="w-full border-b-[1px] border-b-[#8cc73a57] hover:bg-[#166634] duration-300">
              <Link className="block w-full p-3" to="/about">About</Link>
            </li>
            <li className="w-full border-b-[1px] border-b-[#8cc73a57] hover:bg-[#166634] duration-300">
              <Link className="block w-full p-3" to="/contact">Contact</Link>
            </li>
          </ul>

          <ul>
            <li className="w-full border-b-[1px] border-b-[#8cc73a57] hover:bg-[#166634] duration-300">
              <Link className="block w-full p-3" to="/login">Login</Link>
            </li>
            <li className="w-full border-b-[1px] border-b-[#8cc73a57] hover:bg-[#166634] duration-300">
              <Link className="block w-full p-3" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
