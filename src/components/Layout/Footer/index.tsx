import { FC } from "react";
import { Link } from "react-router-dom";
import { HiOutlineQrcode } from "react-icons/hi";
import google from "./../../../assets/GooglePlay.svg";
import apple from "./../../../assets/app-store.svg";
import FooterLink from "./FooterLink";
import FooterSection from "./FooterSection";
import { RiFacebookLine } from "react-icons/ri";
import { PiTwitterLogoLight } from "react-icons/pi";
import { RxInstagramLogo } from "react-icons/rx";
import { RiLinkedinLine } from "react-icons/ri";

const Footer: FC = () => {
  return (
    <footer>
      <div className="flex justify-center bg-black text-white lg:text-2xl">
        <div className="flex flex-wrap justify-between gap-2 p-2 md:px-[4rem] md:py-[2rem] lg:px-[6rem] lg:py-[3rem] sm:w-[100vw] md:w-[100vw] xl:w-[200] 2xl:w-[150rem]">
          <FooterSection title="Exclusive">
            <h3 className="text-md">Subscribe</h3>
            <p className="sm:text-sm lg:text-xl">
              Get 10% off your first order
            </p>
            <div className="w-full flex relative items-center py-2">
              <input
                className="bg-black rounded text-[0.8rem] w-full h-[2rem] px-2 border-2 transition-all border-secondary hover:border-active outline-active"
                type="email"
                placeholder="Enter your email"
              />
              <button type="submit" className="absolute right-2"></button>
            </div>
          </FooterSection>

          <FooterSection title="Support">
            <p className="sm:text-sm lg:text-xl mb-1">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="sm:text-sm lg:text-xl mb-1">exclusive@gmail.com</p>
            <p className="sm:text-sm lg:text-xl mb-1">+88015-88888-9999</p>
          </FooterSection>

          <FooterSection title="Account">
            <FooterLink to="/account">My Account</FooterLink>
            <FooterLink to="/login">Login / Register</FooterLink>
            <FooterLink to="/cart">Cart</FooterLink>
            <FooterLink to="/wishlist">Wishlist</FooterLink>
            <FooterLink to="">Shop</FooterLink>
          </FooterSection>

          <FooterSection title="Quick Link">
            <FooterLink to="">Privacy Policy</FooterLink>
            <FooterLink to="">Terms Of Use</FooterLink>
            <FooterLink to="">FAQ</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterSection>

          <FooterSection title="Download App">
            <p className="text-sm mb-1">Save $3 with App New User Only</p>
            <div className="flex w-full items-center gap-2">
              <span className="w-1/2 h-full">
                <HiOutlineQrcode className="w-full h-full" />
              </span>
              <div className="flex flex-col gap-2 w-1/2 h-[5rem] justify-between">
                <Link
                  className="h-max w-full hover:border-2 rounded-md hover:border-action"
                  to="#"
                >
                  <img
                    className="w-full h-full"
                    src={google}
                    alt="Google Play Store"
                  />
                </Link>
                <Link
                  className="h-max w-full hover:border-2 rounded-md hover:border-action"
                  to="#"
                >
                  <img
                    className="w-full h-full"
                    src={apple}
                    alt="Apple App Store"
                  />
                </Link>
              </div>
            </div>
            <div className="flex justify-between mt-2 text-2xl">
              <RiFacebookLine />
              <PiTwitterLogoLight />
              <RxInstagramLogo />
              <RiLinkedinLine />
            </div>
          </FooterSection>
        </div>
      </div>
      <p className="py-4 px-[7%] border-t-[0.8px] leading-10 border-secondary w-full text-center  bg-black text-white lg:text-2xl">
        &copy; Copyright 2024 - All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
