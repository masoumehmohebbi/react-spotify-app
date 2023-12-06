import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Login = ({ children }) => {
    return (
        <>
            <div className="bg-primary-800 w-full ">
                <div className="w-full bg-primary-900">
                    <div className=" w-full flex justify-end text-white px-12 py-8">
                        <Link className="flex items-center gap-1" to={"/"}>
                            <h2 className="italic font-bold text-2xl">Spotify</h2>
                            <FaSpotify className="text-3xl" />
                        </Link>
                    </div>
                </div>
                {children}
                <p className="text-[12px] text-gray-300 mt-12 pb-8 text-center">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
            </div>
        </>
    )
}