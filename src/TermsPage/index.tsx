import { useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/navBar";
import termsData from "./termsData";

const TermsPage = () => {
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
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Conditions générales d'utilisation</h1>
        {termsData.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">{section.title}</h2>
            {section?.subtitle && (
              <p className="mb-3 text-gray-600 italic">
                {section.subtitle}
              </p>
            )}
            {section?.paragraphs &&
              section.paragraphs.map((p, i) => <p key={i} className="mb-3 text-gray-700 leading-relaxed">{p}</p>)}
            {section.list && section.list.length > 0 && (
              <ul className="my-4 list-disc pl-6 space-y-2">
                {section.list.map((item, i) => (
                  <li key={i} className="text-gray-700">{item}</li>
                ))}
              </ul>
            )}
            {("links" in section) && Array.isArray(section.links) && section.links.length > 0 && (
              <ul className="my-4 list-disc pl-6 space-y-2">
                {section.links.map((link: any, i: number) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {section.subSections && section.subSections.length > 0 &&
              section.subSections.map((sub: any, i: number) => (
                <div key={i} className="mt-4 ml-4 pl-4 border-l-2 border-gray-200">
                  {sub.title && <h4 className="mb-2 text-lg font-medium text-gray-800">{sub.title}</h4>}
                  {sub.paragraphs && sub.paragraphs.map((p: string, j: number) => (
                    <p key={j} className="mb-2 text-gray-700 leading-relaxed">{p}</p>
                  ))}
                  {sub.list && sub.list.length > 0 && (
                    <ul className="my-3 list-disc pl-6 space-y-1">
                      {sub.list.map((li: string, k: number) => (
                        <li key={k} className="text-gray-700">{li}</li>
                      ))}
                    </ul>
                  )}
                  {sub.paragraphs2 && sub.paragraphs2.map((p: string, j: number) => (
                    <p key={`p2-${j}`} className="mb-2 text-gray-700 leading-relaxed">{p}</p>
                  ))}
                  {sub.links && sub.links.length > 0 && (
                    <ul className="my-3 list-disc pl-6 space-y-2">
                      {sub.links.map((link: any, k: number) => (
                        <li key={k}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline font-medium"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
