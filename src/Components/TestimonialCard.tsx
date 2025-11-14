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
  bgColor?: string; // 🔥 Card background color
  highlightColor?: string; // 🔥 Highlight text color
  titleColor?: string; // 🔥 Title text color
  reviewColor?: string; // 🔥 Review text color
  nameColor?: string; // 🔥 Name text color
  roleColor?: string; // 🔥 Role text color
  tagTextColor?: string; // 🔥 Tag text color
  tagBgColor?: string;
  companyColor?: string;
  title2?: string;
  ticket?: string;
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
  reviewColor = "#374151", // gray-700
  nameColor = "#000000",
  roleColor = "#6B7280", // gray-500
  tagTextColor = "#4B5563", // gray-600
  tagBgColor = "#FFFFFF", // gray-100
  companyColor = "#6B7280",
  title2 = "",
  ticket,
}) => {
  return (
    <div
      className={`my-4 flex rounded-2xl shadow-lg w-xs md:w-sm lg:w-lg ${bgColor}`}
    >
      <img src={image} alt={name} className="w-24 rounded-2xl object-cover" />

      <div className="relative h-72 space-y-4 px-4 py-2 md:h-60 lg:h-52">
        <h3 className="flex items-center justify-between font-semibold md:text-xl">
          <div className="flex items-center">
            <span
              className="pe-2 font-semibold"
              style={{ color: highlightColor }}
            >
              {highlight}
            </span>
            <span style={{ color: titleColor }}>{title}</span>
          </div>
          <img src={title2} alt="icon" className="h-auto w-[10%]" />
        </h3>

        <blockquote className="text-xs italic" style={{ color: reviewColor }}>
          "{review}"
        </blockquote>

        <div className="bottom-2 w-full items-center justify-between pe-8 text-xs md:absolute md:flex md:text-sm">
          <div>
            <p
              className="text-start font-semibold"
              style={{ color: nameColor }}
            >
              {name}
            </p>

            <p
              className="text-start text-sm font-medium"
              style={{ color: roleColor }}
            >
              {role} à <span style={{ color: companyColor }}>{company}</span>
            </p>
          </div>

          <div>
            {tag && (
              <button
                className={`px-4 py-2 my-4 rounded-lg font-medium flex justify-center items-center ${tagBgColor}`}
                style={{
                  color: tagTextColor,
                  backgroundColor: tagBgColor,
                }}
              >
                <img
                  src={ticket}
                  alt="icon"
                  className="mr-2 text-[#167BBC] md:h-5 md:w-5"
                />
                {tag}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
