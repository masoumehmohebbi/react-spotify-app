import { Link } from "react-router-dom"
import { FaSpotify } from "react-icons/fa"
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiLibrary, BiLogoFacebookCircle, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const navBar = [
    {
        id: 1,
        title: "Premium",
        href: "/"
    },
    {
        id: 2,
        title: "Support",
        href: "/"
    },
    {
        id: 3,
        title: "Herunterladen",
        href: "/"
    },
    {
        id: 4,
        title: "Registrieren",
        href: "/"
    },
    {
        id: 5,
        title: "Anmelden",
        href: "/"
    },
]
export const AboutUs = () => {
    return (
        <>
            {/* stert navbar in about page */}
            <div className="text-secondary-0 absolute top-0 w-full flex items-center justify-center bg-primary-900">
                <ul className="w-full flex items-center justify-around p-4">
                    <li className="text-white">
                        <Link className="flex items-center gap-1" to={"/"}>
                            <FaSpotify className="text-4xl" />
                            <h1 className="italic font-bold text-3xl text-secondary-0">Spotify</h1>
                        </Link>
                    </li>
                    <div className="flex items-center gap-8 text-md font-bold ">
                        {
                            navBar.map(item => (
                                <li key={item.id} className="hover:text-green-500">
                                    <Link to={"#"}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </div>
                </ul>
            </div>
            {/* end navbar in about page */}

            {/* start abou page main */}
            <div className="bg-white w-full h-auto flex items-center justify-center mt-24">
                <div className="w-[80%] pt-8 pb-24">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">
                            Our Team
                        </h1>
                        <p className="mt-2 text-primary-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae quos accusamus nesciunt, a at odit pariatur ratione aliquam, itaque omnis quidem minus nam laboriosam veritatis sint fugiat. Reprehenderit, veritatis!
                        </p>
                    </div>
                    <div className="flex flex-col gap-12 mt-24">
                        <div>
                            <h2 className="text-3xl font-bold text-primary-600">
                                Masoumeh Mohebbi
                            </h2>
                            <p className="mt-2 text-primary-500">
                                about Masoumeh Mohebbi text ( Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae quos accusamus nesciunt, )
                            </p>
                            <div className="flex items-center gap-4 mt-4">
                                <Link className="bg-primary-100 rounded-full p-2 border shadow" to={"https://github.com/masoumehmohebbi"}>
                                    <FaGithub className="text-primary-800 text-xl" />
                                </Link>
                                <Link className="bg-primary-100 rounded-full p-2 border shadow" to={"https://www.linkedin.com/in/masoumemohebbi/"}>
                                    <FaLinkedin className="text-primary-800 text-xl" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-primary-600">
                                Niloofar Palvaneh
                            </h2>
                            <p className="mt-2 text-primary-500">
                                about Masoumeh Mohebbi text ( Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae quos accusamus nesciunt, )
                            </p>
                            <div className="flex items-center gap-4 mt-4">
                                <Link className="bg-primary-100 rounded-full p-2 border shadow" to={"https://github.com/Niloofar-Palvaneh"}>
                                    <FaGithub className="text-primary-800 text-xl" />
                                </Link>
                                <Link className="bg-primary-100 rounded-full p-2 border shadow" to={"https://www.linkedin.com/in/niloofar-palvaneh-87216b281/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                                    <FaLinkedin className="text-primary-800 text-xl" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-primary-600">
                                Afshar Sharifi
                            </h2>
                            <p className="mt-2 text-primary-500">
                                about Masoumeh Mohebbi text ( Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae quos accusamus nesciunt, )
                            </p>
                            <div className="flex items-center gap-4 mt-4">
                                <Link className="bg-primary-100 rounded-full p-2 border shadow" to={"https://github.com/afsharsharifi"}>
                                    <FaGithub className="text-primary-800 text-xl" />
                                </Link>
                                <Link className="bg-primary-100 rounded-full p-2 border shadow" to={"https://www.linkedin.com/in/afsharsharifi/"}>
                                    <FaLinkedin className="text-primary-800 text-xl" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* end abou page main */}

            <footer className="px-9 flex items-center justify-center">
                <div className=" flex items-start justify-between text-primary-100 w-[80%] py-12">
                    <div className="text-white">
                        <Link className="flex items-center gap-1" to={"/"}>
                            <FaSpotify className="text-4xl text-primary-100" />
                            <h1 className="italic font-bold text-3xl text-secondary-0">Spotify</h1>
                        </Link>
                    </div>
                    <div className="col-span-8 md:col-s pan-5">
                        <div className="flex items-start gap-32">
                            <ul className="space-y-2">
                                <p className="font-bold text-secondary-0 text-xl md:text-lg">
                                    Useful links
                                </p>
                                <Link to={"/"}>
                                    <li>Home</li>
                                </Link>
                                <Link to={"/login"}>
                                    <li>Log in</li>
                                </Link>
                                <Link to={"/signup"}>
                                    <li>Sign up</li>
                                </Link>
                            </ul>
                            <ul className="space-y-2">
                                <p className="font-bold text-secondary-0 text-xl md:text-lg">
                                    team
                                </p>
                                <Link to={"/aboutUs"}>about</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-8 md:col-span-3 flex md:justify-end ">
                        <ul className="flex gap-x-5">
                            <li>
                                <a
                                    href="#"
                                    className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-100 h-10 w-10 flex justify-center items-center border-none"
                                >
                                    <BiLogoInstagram className="text-2xl" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-100 h-10 w-10 flex justify-center items-center border-none"
                                >
                                    <BiLogoTwitter className="text-2xl" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-100 h-10 w-10 flex justify-center items-center border-none"
                                >
                                    <BiLogoFacebookCircle className="text-2xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}