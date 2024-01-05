import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { Header } from "../features/auth/AuthFormLayout";
import { Footer } from "../ui/Footer";

const developers = [
  {
    id: 1,
    name: "Afshar Sharifi",
    field: "Back-end developer",
    socialMedia: [
      {
        id: 1,
        icon: FaLinkedin,
        src: "https://www.linkedin.com/in/afsharsharifi/",
      },
      { id: 2, icon: FaGithub, src: "https://github.com/afsharsharifi" },
      { id: 3, icon: FaTelegram, src: "" },
    ],
  },
  {
    id: 2,
    name: " Niloofar Palvaneh",
    field: "Front-end developer",
    socialMedia: [
      {
        id: 1,
        icon: FaLinkedin,
        src: "https://www.linkedin.com/in/niloofar-palvaneh-87216b281/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      { id: 2, icon: FaGithub, src: "https://github.com/Niloofar-Palvaneh" },
      { id: 3, icon: FaTelegram, src: "" },
    ],
  },
  {
    id: 3,
    name: "Masoume Mohebbi",
    field: "Front-end developer",
    socialMedia: [
      {
        id: 1,
        icon: FaLinkedin,
        src: "https://www.linkedin.com/in/masoumemohebbi/",
      },
      { id: 2, icon: FaGithub, src: "https://github.com/masoumehmohebbi" },
      { id: 3, icon: FaTelegram, src: "" },
    ],
  },
];

export const AboutUs = () => {
  return (
    <div className="pb-5">
      <Header />
      <div className="bg-secondary-0 w-full px-5 mx-auto h-auto flex items-center justify-center">
        <div className="pt-8 pb-24 w-full md:w-11/12">
          <div className="text-center">
            <h1 className="text-2xl font-bold">About Project</h1>
            <p className="pt-9 text-primary-500 w-full lg:max-w-4xl mx-auto">
              Spotify is a web music player. This website has (feauture).Styling
              is with Tailwind-css. The state managment is tanstack-query. And
              the form validation is with react-hook-form. Backend is django and
              mongoDB. Well, This website is developed by the following
              developers.
            </p>
          </div>
          <div className="text-center mt-24">
            <h1 className="text-2xl font-bold">Developers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-9">
              {developers.map((dev) => (
                <div
                  key={dev.id}
                  className="border block sm:justify-between sm:items-center sm:flex md:block border-secondary-50 hover:scale-105 duration-300 p-4 text-center rounded-md shadow-md"
                >
                  <h2 className="text-2xl font-bold text-primary-700">
                    {dev.name}
                  </h2>
                  <p className="mt-2 text-secondary-500">{dev.field}</p>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    {dev.socialMedia.map((item) => (
                      <Link
                        key={item.id}
                        className="bg-primary-100 font-extralight hover:bg-primary-300 duration-500 rounded-full p-2 border shadow"
                        to={item.src}
                      >
                        <item.icon className="text-primary-800 text-xl" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
