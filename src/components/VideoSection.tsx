const VideoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Titre de la section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">
            Plongez au cœur de l'IESC
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            Revivez les moments forts de notre campus, nos événements et découvrez notre environnement d'excellence.
          </p>
        </div>

        {/* Grille de la vidéo */}
        <div className="max-w-4xl mx-auto bg-white p-4 rounded-xl shadow-lg border border-gray-100">
          {/* Conteneur 16:9 pour que la vidéo s'adapte aux téléphones */}
          <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingTop: "56.25%" }}>
            
            {/* L'intégration YouTube */}
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Présentation IESC" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;