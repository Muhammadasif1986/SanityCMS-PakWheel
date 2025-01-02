import Link from "next/link";
import Image from "next/image";
import LinkedIn from "../../public/linkedin-icon.png";
import logo from "../../public/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center bg-gray-700 w-full h-auto pb-20 pt-10">
        <div className="flex w-full h-auto justify-center items-center text-yellow-100 text-xl lg:w-1/2">
          <div className=" h-auto w-32 flex justify-center items-end">
            <Image src={logo} alt="Logo" className="w-2/3" />
          </div>
          <div className="text-xl font-normal">
            Student of Certified Cloud Applied Generative AI Engineer (GenEng)
          </div>
        </div>
        <div className="flex justify-between items-center w-full lg:w-8/12">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-green-100 text-lg font-medium pt-4">
              <span className="font-normal text-lg pr-5 text-yellow-100">
                Create By :
              </span>
              Muhammad Asif
            </h1>

            <h1 className="text-green-100 text-lg font-medium pt-4">
              <span className="font-normal text-lg pr-5 text-yellow-100">
                Roll Number :
              </span>
              00242149
            </h1>

            <h1 className="text-green-100 text-lg font-medium pt-4">
              <span className="font-normal text-lg pr-5 text-yellow-100">
                WhatsApp :
              </span>
              +92333 3765210
            </h1>

            <h1 className="flex text-green-100 text-lg font-medium pt-4">
              <span className="font-normal text-lg pr-5 text-yellow-100">
                Social Account :
              </span>
              <Link
                className="flex justify-center"
                href="https://www.linkedin.com/in/muhammad-asif-489220134/"
              >
                LinkedIn
                <Image
                  className="pl-2 w-10 h-8"
                  src={LinkedIn}
                  alt="Linkedin"
                />
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
