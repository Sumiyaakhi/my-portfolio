import React from "react";
import RESUME from "../../assets/Resume of Sumiya Akhi.pdf";

const CTA = () => {
  return (
    <div className="py-5">
      <button className="btn bg-blue-900 text-blue-300 px-5 py-3 rounded ">
        {" "}
        <a href={RESUME} download>
          Download Resume
        </a>
      </button>
      <button className="btn bg-blue-900 text-blue-300 px-5 py-3 rounded  ms-6">
        let's talk
      </button>
    </div>
  );
};

export default CTA;
