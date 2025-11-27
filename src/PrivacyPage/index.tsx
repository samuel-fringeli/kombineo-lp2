import { useEffect } from "react";
import { privacyData as policy } from "./privacyData";
import Navbar from "../Components/navBar";
import Footer from "../Components/Footer";
const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #def9fd 4.07%, #fffffe 100%)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div className="container mx-auto max-w-4xl px-4 pt-32 pb-20">
        <h1 className="mb-4 text-3xl font-bold">{policy.title}</h1>
        <p className="mb-2 text-sm text-gray-500">
          Dernière mise à jour : {policy.lastUpdated}
        </p>

        {policy.sections.map((section) => (
          <div key={section.number} className="mb-6">
            <h5 className="mb-2 text-2xl font-semibold">
              {section.number}. {section.title}
            </h5>

            {section.paragraphs &&
              section.paragraphs.map((p, idx) => (
                <p key={idx} className="mb-2 text-gray-700">
                  {p}
                </p>
              ))}

            {section.list && (
              <ul className="mb-2 list-disc pl-6 text-gray-700">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {section.additionalParagraphs &&
              section.additionalParagraphs.map((p, idx) => (
                <p key={idx} className="mb-2 text-gray-700">
                  {p}
                </p>
              ))}

            {section.subSections &&
              section.subSections.map((sub) => (
                <div key={sub.letter} className="ml-4 mt-4">
                  <h6 className="mb-1 text-xl font-medium">
                    {sub.letter}) {sub.title}
                  </h6>

                  {sub.paragraphs &&
                    sub.paragraphs.map((p, idx) => (
                      <p key={idx} className="mb-2 text-gray-700">
                        {p}
                      </p>
                    ))}

                  {sub.list && (
                    <ul className="mb-2 list-disc pl-6 text-gray-700">
                      {sub.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {sub.additionalParagraphs &&
                    sub.additionalParagraphs.map((p, idx) => (
                      <p key={idx} className="mb-2 text-gray-700">
                        {p}
                      </p>
                    ))}
                </div>
              ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
