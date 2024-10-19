import React from "react";
import {FaArrowRightLong} from "react-icons/fa6";

const Action = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="p-6 rounded-xl bg-default-950/40">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex-shrink">
              <div className="flex -space-x-2">
                {[1,2,3].map((img, index) => (
                    <img src={`assets/images/avatars/img-${index + 1}.png`} alt="Image des" className="inline-block h-10 w-10 rounded-full ring-2 ring-default-950 bg-white" />
                  ))}

                  <button className="h-10 w-10 font-medium text-primary rounded-full bg-white">
                    80+
                  </button>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-medium text-default-200">
                Join our blockchain experts community
              </h3>
              <p className="w-3/4 text-basis font-medium tex-default-300 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsum corrupti architecto deleniti alias reiciendis odio tenetur nobis corporis nihil totam cum eos magnam illum excepturi, at est velit qui accusamus placeat non ut perspiciatis? Recusandae modi tenetur reprehenderit magni.
              </p>
            </div>
            <div className="flex-shrink">
              <a href="#" target="_blank" className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300">
              Join <FaArrowRightLong />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
