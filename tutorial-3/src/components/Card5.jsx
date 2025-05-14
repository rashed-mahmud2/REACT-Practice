import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsAmazon } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

function Card5() {
  return (
    <>
      <h1></h1>
      <div className="flex">
        <span className="icon">
          <FaFacebook />
        </span>
        <span className="icon">
          <BsAmazon />
        </span>
        <span className="icon">
          <CgMail />
        </span>
        <span className="icon">
          <FaYoutube />
        </span>
        <span className="icon">
          <FaInstagram />
        </span>
        <span className="icon">
          <FaLinkedin />
        </span>
      </div>
    </>
  );
}

export default Card5;
