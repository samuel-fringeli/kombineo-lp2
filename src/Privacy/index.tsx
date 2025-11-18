import Footer from "../Components/Footer";

const PrivacyPage = () => {
  return (
    <div className="bg-[#ecfcff] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 pt-20 pb-10">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#035E71] via-[#5DA9B9] to-[#035E71] bg-clip-text text-transparent">
          Politique de Confidentialité
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
            <p className="leading-relaxed">
              Bienvenue sur notre politique de confidentialité. Chez Kombineo, nous nous engageons 
              à protéger vos données personnelles et à respecter votre vie privée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Collecte des données</h2>
            <p className="leading-relaxed">
              Nous collectons les informations que vous nous fournissez directement, telles que 
              lorsque vous créez un compte, utilisez nos services ou nous contactez.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Utilisation des données</h2>
            <p className="leading-relaxed">
              Nous utilisons vos données pour fournir, maintenir et améliorer nos services, 
              ainsi que pour communiquer avec vous.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Protection des données</h2>
            <p className="leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos 
              informations personnelles contre tout accès non autorisé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Contact</h2>
            <p className="leading-relaxed">
              Pour toute question concernant cette politique de confidentialité, veuillez nous 
              contacter à privacy@kombineo.com.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
