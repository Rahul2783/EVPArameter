import React from "react";
// import './EVParameters.css';



const EVParameters = () => {
  const parameters = [
    {
      title: "Ideation",
      items: ["How good is the idea", "Alignment with the problem statement"],
     
    },
    {
      title: "Novelty & Impact",
      items: ["Is the solution novel?", "Impact of the solution"],
    
    },
    {
      title: "Feasibility",
      items: ["Technical Feasibility", "Business Feasibility"],
     
    },
    {
      title: "Market Readiness",
      items: ["Market Readiness"],
   
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-24px text-#0F172A text-left mb-4 font-semibold ">Evaluation Parameters</h2>
      <h3 className="text-24px text-gray-600 text-left mb-6 font-semibold ">
        Idea Submissions Evaluation Parameters
      </h3>

      <div className="bg-gradient-to-r from-pink-600 to-indigo-900 p-8 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {parameters.map((param, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg "
            >
              <div className="bg-gradient-to-b from-blue-800 via-purple-500 to-pink-500 border border-gray-300 rounded-lg">
                <h4 className="text-white font-medium text-center p-2 text-lg ">
                  {param.title}
                </h4>
              </div>
              <div className="flex flex-col justify-center items-start p-5">
                <ul className="space-y-3  ">
                  {param.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-white text-sm flex text-left p-2 "
                    >
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EVParameters;
