import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="my-16 ">
        <div className="text-center">
        <h5 className="text-slate-400 font-semibold text-2xl">Get to know</h5>
        <h1 className="text-3xl font-bold text-white">About my Skills</h1>
        <div className="text-sky-500">______________________________________________</div>
        <div className="text-sky-500">______________________________</div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 mx-16 gap-8">
        <div >
        <h1  className="text-2xl font-semibold text-sky-500 mb-4">Expertise</h1>
        <div className="grid grid-cols-2 gap-4">
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">HTML5</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">CSS</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">Bootstrap</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">Tailwind</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">DaisyUi</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">JavaScript</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">React js</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">MongoDb</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">Firebase</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">C++</h1>
        </div>
        </div>
        <div>  <h1  className="text-2xl font-semibold text-sky-500 mb-4">Comfortable</h1>
        <div className="grid grid-cols-2 gap-4">
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">Express js</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">Node js</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">MySql</h1>
        <h1 className="text-xl text-white font-bold border text-center rounded">Problem Solving</h1>
       
        </div>
        </div>
        <div><h1  className="text-2xl font-semibold text-sky-500 mb-4">Familiar</h1>
        <div className="grid grid-cols-2 gap-4">
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">Express js</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">JWT</h1>
        <h1 className="text-xl text-white font-bold border p-2 text-center rounded">Cors</h1>
        <h1 className="text-xl text-white font-bold border p-1 text-center rounded">npm Packages</h1>
       
        </div>
        </div>
      </div>
    </section> 
  );
};

export default Skills;
