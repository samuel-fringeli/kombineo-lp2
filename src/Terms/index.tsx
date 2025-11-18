import Footer from "../Components/Footer";

const TermsPage = () => {
  return (
    <div className="bg-[#ecfcff] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 pt-20 pb-10">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
          Conditions d'Utilisation
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Acceptation des conditions</h2>
            <p className="leading-relaxed">
              En utilisant Kombineo, vous acceptez d'être lié par les présentes conditions 
              d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser 
              nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Description du service</h2>
            <p className="leading-relaxed">
              Kombineo est une plateforme CRM conçue spécifiquement pour les business high-ticket. 
              Notre service vous permet de gérer vos prospects, suivre vos KPIs et optimiser 
              votre processus de vente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Utilisation acceptable</h2>
            <p className="leading-relaxed">
              Vous vous engagez à utiliser nos services de manière légale et éthique. 
              Toute utilisation abusive ou frauduleuse est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Propriété intellectuelle</h2>
            <p className="leading-relaxed">
              Tous les droits de propriété intellectuelle relatifs à Kombineo et ses services 
              restent la propriété exclusive de notre société.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Limitation de responsabilité</h2>
            <p className="leading-relaxed">
              Kombineo ne peut être tenu responsable des dommages indirects, consécutifs ou 
              spéciaux résultant de l'utilisation ou de l'impossibilité d'utiliser nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Modifications</h2>
            <p className="leading-relaxed">
              Nous nous réservons le droit de modifier ces conditions à tout moment. 
              Les modifications entrent en vigueur dès leur publication sur notre site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Contact</h2>
            <p className="leading-relaxed">
              Pour toute question concernant ces conditions d'utilisation, veuillez nous 
              contacter à legal@kombineo.com.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
