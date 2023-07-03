import React from "react";
import img1 from "../../assets/assignment-12.png";
import img2 from "../../assets/assignment-11.png";
import img3 from "../../assets/Asignment-10.png";
import { FaGithub, FaGithubAlt } from "react-icons/fa";
import { TbWorldShare } from "react-icons/tb";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-center">
        <h5 className="text-slate-400 font-semibold text-2xl">Get to know</h5>
        <h1 className="text-3xl font-bold text-white">
          About My Best Projects
        </h1>
        <div className="text-sky-500">
          ______________________________________________
        </div>
        <div className="text-sky-500">______________________________</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40  my-12 me-8">
        <div className="card w-96 bg-blue-900 shadow-xl mx-5 ">
          <figure>
            <img className="rounded" src={img1} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white font-semibold font-serif py-3 ps-5 text-2xl text-center">
              Sports Summer Camp
            </h2>

            <ul className="text-sky-200 py-5 ps-5 ms-3 list-disc">
              <li className="">
                This is the complete website for summer camp. Where students can
                enroll any class and pay for it.
              </li>
              <li>
                There are different dashboard for student, instructor and admin.
                They can do some specific task differently.
              </li>
              <li>Admin can manage user and classes. </li>
              <li>Instructor can add class in this site.</li>
            </ul>
            <div className="flex mx-4 my-auto space-x-3">
              <button className=" btn bg-blue-400 px-4 py-2 text-white rounded-md ">
                <Link
                  className="flex justify-center items-center"
                  to="https://github.com/Sumiyaakhi/camping-sports-client"
                >
                  {" "}
                  CLIENT <FaGithub></FaGithub>
                </Link>
              </button>
              <button className=" btn bg-blue-400 px-4 py-2 text-white rounded-md ">
                <Link
                  className="flex justify-center items-center"
                  to="https://github.com/Sumiyaakhi/camping-sports-server"
                >
                  {" "}
                  SERVER <FaGithub></FaGithub>
                </Link>
              </button>
              <button className=" btn bg-blue-400 px-4 py-2 text-white rounded-md ">
                <Link
                  className="flex justify-center items-center"
                  to="https://sports-camp-8784f.web.app/"
                >
                  {" "}
                  LIVE SITE <TbWorldShare></TbWorldShare>{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-blue-900 shadow-xl mx-5 ">
          <figure>
            <img className="rounded" src={img2} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white font-semibold text-center font-serif py-3 ps-5 text-2xl">
              Princess Magic
            </h2>

            <ul className="text-sky-200 py-5 ps-5 ms-3 list-disc">
              <li className="">
                This is the complete website for princess toy for girls. Where
                users can add any toy in his database from "All Toys" page.
              </li>
              <li>They can delete any toy.</li>
              <li>They can update any toys information. </li>
              <li>For these things, they must be login first.</li>
            </ul>
            <div className="flex mx-4  space-x-3 my-auto">
              <button className=" btn bg-blue-400 px-4 py-2 text-white rounded-md ">
                <Link
                  className="flex justify-center items-center"
                  to="https://github.com/Sumiyaakhi/princess-magic-client"
                >
                  {" "}
                  CLIENT <FaGithub></FaGithub>
                </Link>
              </button>
              <button className=" btn bg-blue-400 px-4 py-2 text-white rounded-md ">
                <Link
                  className="flex justify-center items-center"
                  to="https://github.com/Sumiyaakhi/princess-magic-server"
                >
                  {" "}
                  SERVER <FaGithub></FaGithub>
                </Link>
              </button>
              <button className=" btn bg-blue-400 px-4 py-2 text-white rounded-md ">
                <Link
                  className="flex justify-center items-center"
                  to="https://princess-magic-615a1.web.app/"
                >
                  {" "}
                  LIVE SITE <TbWorldShare></TbWorldShare>{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-blue-900 shadow-xl mx-5 ">
          <figure>
            <img className="rounded" src={img3} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white font-semibold text-center font-serif py-3 ps-5 text-2xl">
              FOODIE-RECIPE
            </h2>

            <ul className="text-sky-200 py-5 ps-5 ms-3 list-disc">
              <li className="">
                This is the complete website for a restaurant. Where user can
                choose any dish for placing order.
              </li>
              <li>They can also see food recipe details .</li>
              <li>Here are also the detail information about chef's. </li>
            </ul>
            <div className="flex mx-4 my-auto space-x-3">
              <button className=" btn bg-blue-400 px-4 py-2 text-white rounded-md ">
                <Link
                  className="flex justify-center items-center"
                  to="https://github.com/Sumiyaakhi/food-recipe-client"
                >
                  {" "}
                  CLIENT <FaGithub></FaGithub>
                </Link>
              </button>
              <button className=" btn bg-blue-400 px-4 py-2 text-white rounded-md ">
                <Link
                  className="flex justify-center items-center"
                  to="https://github.com/Sumiyaakhi/food-recipe-server"
                >
                  {" "}
                  SERVER <FaGithub></FaGithub>
                </Link>
              </button>
              <button className=" btn bg-blue-400 px-4 py-2 text-white rounded-md ">
                <Link
                  className="flex justify-center items-center"
                  to="https://food-recipe-foodie.web.app/"
                >
                  {" "}
                  LIVE SITE <TbWorldShare></TbWorldShare>{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
