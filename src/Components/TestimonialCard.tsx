import React from "react";

interface TestimonialCardProps {
  image: string;
  highlight: string;
  title: string;
  review: string;
  name: string;
  role: string;
  company: string;
  tag?: string;
  bgColor?: string;          // 🔥 Card background color
  highlightColor?: string;   // 🔥 Highlight text color
  titleColor?: string;       // 🔥 Title text color
  reviewColor?: string;      // 🔥 Review text color
  nameColor?: string;        // 🔥 Name text color
  roleColor?: string;        // 🔥 Role text color
  tagTextColor?: string;     // 🔥 Tag text color
  tagBgColor?: string;
  companyColor?: string
  title2?: string
  ticket?:string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  title,
  highlight,
  review,
  name,
  role,
  company,
  tag,
  bgColor = "white",
  highlightColor = "#2563EB", // default blue
  titleColor = "#000000",
  reviewColor = "#374151",   // gray-700
  nameColor = "#000000",
  roleColor = "#6B7280",     // gray-500
  tagTextColor = "#4B5563",  // gray-600
  tagBgColor = "#FFFFFF",    // gray-100
  companyColor = "#6B7280",
  title2 = "",
  ticket
}) => {
  return (
    <div
      className={`flex items-start gap-0 shadow-md rounded-2xl max-w-lg border-[2px] border-[#0000000D] shadow-lg font-inter" ${bgColor}`}
    >
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-[93px] lg:h-[30vh] xl:h-44 2xl:h-44 md:h-52 sm:h-72 h-48 rounded-2xl object-cover"
      />

      {/* Content */}
      <div className="flex-1 lg:mx-3 md:mx-3 sm:mx-3 mx-1 my-0 font-inter">
        <div className="">
          <div className="flex justify-between items-center">
            <h3 className="lg:text-[22px] md:text-[25px] sm:text-[25px] text-[20px] font-semibold flex justify-between items-center lg:space-x-1 md:space-x-1 sm:space-x-1 space-x-0 " style={{ color: titleColor }}>
              {/* <div> */}
              <span className="font-semibold" style={{ color: highlightColor }}>
                {highlight}
              </span>{" "} <span>{" "}</span>
              {title}
              {/* </div> */}
            </h3>
            <img
              src={title2}
              alt="icon"
              className="w-[50px] h-[12px] sm:w-[65px] sm:h-[15px] md:w-[75px] md:h-[18px] lg:w-[50px] lg:h-[20px]"
            />
          </div>


          <p className="italic mt-3 text-start leading-5 lg:text-[12px] md:text-[12px] sm:text-[12px] text-[12px]" style={{ color: reviewColor }}>
            "{review}"
          </p>
          <div className="lg:flex md:flex sm:flex flex justify-between items-center">
            <div className="mt-3">
              <p className="font-semibold text-start" style={{ color: nameColor }}>
                {name}
              </p>
              <p className="text-sm font-medium" style={{ color: roleColor }}>
                {role} à <span>{" "}</span>
                <span className="" style={{ color: companyColor }}>
                  {company}
                </span>
              </p>
            </div>
            <div className="mt-1">
              {tag && (
                <button
                  className={`px-4 py-2 my-4 rounded-lg text-sm font-medium flex justify-center items-center" ${tagBgColor}`}
                  style={{
                    color: tagTextColor,
                    backgroundColor: tagBgColor,
                  }}
                >
                  <img
                    src={ticket}
                    alt="icon"
                    className="w-5 h-5 mr-2 text-[#167BBC]"
                  />
                  {tag}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
