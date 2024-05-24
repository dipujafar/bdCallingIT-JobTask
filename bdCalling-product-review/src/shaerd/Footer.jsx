import Container from "./Container";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#C1DCDC] text-black">
      <Container>
        <footer className="flex flex-col md:flex-row justify-between p-10  text-base-content mt-20">
          <aside className="min-w-8/12">
            <h1 className="text-lg font-medium mb-2">GREENMIND</h1>
            <p>
              We help you find
              <br />
              your dream plant
            </p>
            <div className="my-4 flex gap-4">
              <p className="border border-black p-2 rounded-full">
                <FaFacebookF />
              </p>
              <p className="border border-black p-2 rounded-full">
                <RiInstagramFill />
              </p>
              <p className="border border-black p-2 rounded-full">
                <FaSquareXTwitter />
              </p>
            </div>
          </aside>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 justify-center items-center">
            <nav>
              <h6 className="footer-title">Information</h6>
              <ul>
                <li>
                  <a className="link link-hover">About</a>
                </li>
                <li>
                  <a className="link link-hover">Product</a>
                </li>
                <li>
                  <a className="link link-hover">Blog</a>
                </li>
              </ul>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <ul>
                <li>
                  <a className="link link-hover">Community</a>
                </li>
                <li>
                  <a className="link link-hover">Career</a>
                </li>
                <li>
                  <a className="link link-hover">Our story</a>
                </li>
              </ul>
            </nav>
            <nav>
              <h6 className="footer-title">Contact</h6>
              <ul>
                <li>
                  <a className="link link-hover">Getting Started</a>
                </li>
                <li>
                  <a className="link link-hover">Pricing</a>
                </li>
                <li>
                  <a className="link link-hover">Resources</a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
        <p>2024 all Right Reserved Term of use GREENMIND</p>
      </Container>
    </div>
  );
};

export default Footer;
