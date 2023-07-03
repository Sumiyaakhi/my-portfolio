import React from "react";
import img from '../../assets/me another.jpg'

const About = () => {
  return (
    <section id="about">
      <div className="text-center">
        <h5 className="text-slate-400 font-semibold text-2xl">Get to know</h5>
        <h1 className="text-3xl font-bold text-white">About Me</h1>
        <div className="text-sky-500">______________________________________________</div>
        <div className="text-sky-500">______________________________</div>
      </div>
     
      <div className="md:flex my-5 items-center">
        <div className="md:w-1/3 mx-8">
        <img className="rounded-full" src={img} alt="" />

        </div>
        <div className="md:ms-36 mx-8 md:w-2/3">
        <p className="my-5 text-center text-slate-400">Hi... I'm Sumiya Akter Akhi. I am a professional web developer. I am working with HTML, CSS, JavaScript, React js, MongoDb and so on. I like to work with this field. This is my hobby and my dream also.</p>

<p className="my-5 text-center text-slate-400"> I'am a student of <span className="text-sky-500 text-xl font-bold">Computer Science & Engineering (CSE)</span> Department.  Recently I have finished Web Development Course. </p>

        </div>
      </div>
    </section>
  );
};

export default About;
