import Footer from "../Components/Footer";
import Hero from "../Components/hero";
import termsData from "./termsData";

const TermsPage = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #def9fd 4.07%, #fffffe 100%)",
      }}
    >
      <Hero />

      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-4">Conditions générales d’utilisation</h1>
        {termsData.map((section, index) => (
          <div key={index} className="mb-5">
            <h2 className="h5">{section.title}</h2>
            {section?.subtitle && (
              <p className="text-muted">
                <em>{section.subtitle}</em>
              </p>
            )}
            {section?.paragraphs &&
              section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {section.list?.length > 0 && (
              <ul>
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.links?.length > 0 && (
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-semibold text-body"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {section.subSections?.length > 0 &&
              section.subSections.map((sub, i) => (
                <div key={i} className="mt-3 ps-3">
                  <h4 className="h6">{sub.title}</h4>
                  {sub.paragraphs?.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {sub.list?.length > 0 && (
                    <ul>
                      {sub.list.map((li, k) => (
                        <li key={k}>{li}</li>
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
