import { Link } from "react-router-dom";
import logo from "../assets/images/website-logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function Footer() {
  return (
    <footer className="bg-[#8cc73a52] grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 p-5 py-[5rem] md:space-y-0 space-y-[1rem]">
      <div className="h-full">
      <Link to="/">
          <img
            className="md:w-[150px] w-[100px] md:h-[80px] h-[50px]"
            src={logo}
            alt="site logo"
          />
          </Link>
          <p className="text-[1.25rem] font-medium mt-3">Growing Dreams, One Plant at a Time!</p>
      </div>

      <div>
        <h3 className="text-[1.25rem] font-semibold border-b-[1px] border-[#0A943F] pb-2">Contact Info</h3>
        <ul className="space-y-3 mt-5">
          <li>
            <Link to="">Need Help?</Link>
          </li>
          <li>
            <Link to="">Submit a Ticket</Link>
          </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-[1.25rem] font-semibold border-b-[1px] border-[#0A943F] pb-2">About Use</h3>
        <ul className="space-y-3 mt-5">
          <li>
            <Link to="">About the Star Haven</Link>
          </li>
          <li>
            <Link to="">FAQ</Link>
          </li>
          <li>
            <Link to="">How We Ship</Link>
          </li>
          <li>
            <Link to="">Make a Return</Link>
          </li>
          <li>
            <Link to="">Accessibility</Link>
          </li>
          <li>
            <Link to="">Privacy Policy</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-[1.25rem] font-semibold border-b-[1px] border-[#0A943F] pb-2">Educational Info</h3>
        <ul className="space-y-3 mt-5">
          <li>
            <Link to="">Blogs</Link>
          </li>
          <li>
            <Link to="">Guides</Link>
          </li>
          <li>
            <Link to="">Hardiness Zones</Link>
          </li>
          <li>
            <Link to="">Plants For Your State</Link>
          </li>
          <li>
            <Link to="">Fast Growing Plants</Link>
          </li>
        </ul>
      </div>

      <div className="space-y-5">
        <h3 className="text-2xl font-semibold">Join The Star Haven newsletter for goodies!</h3>
        <p>Get discounts, gardening tips, six-pack abs and more!</p>
       <div className="relative">
       <input className="bg-white px-4 py-3 w-full outline-none border-gray-300" placeholder="Your Email Address..." type="text" name="news-letter"/>
       <Icon className="absolute right-4 top-4 cursor-pointer bg-[#0A943F] rounded-full text-white w-[20px] h-[20px] p-1" icon="cil:arrow-right" />
       </div>
      </div>
    </footer>
  )
}
