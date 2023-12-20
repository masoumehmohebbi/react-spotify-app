import { FaSpotify } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

export const AuthFormLayout = () => {
  return (
    <div className="bg-linear w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export function Header() {
  return (
    <div className="w-full bg-primary-900">
      <div className=" w-full flex justify-end text-secondary-0 px-12 py-8">
        <Link className="flex items-center gap-1" to={"/"}>
          <h2 className="italic font-bold text-2xl">Spotify</h2>
          <FaSpotify className="text-4xl" />
        </Link>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <p className="text-xs text-secondary-100 text-center p-8">
      This site is protected by reCAPTCHA and the Google Privacy Policy and
      Terms of Service apply
    </p>
  );
}
