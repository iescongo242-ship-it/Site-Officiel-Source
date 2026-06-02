const VideoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Titre de la section (Mise à jour pour MTN) */}
        <div className="text-center mb-12">
          <span className="text-[#CC1122] font-semibold text-sm uppercase tracking-wider">Immersion Professionnelle</span>
          <h2 className="text-3xl font-bold text-black mb-4 font-heading mt-2">
            L'IESC au cœur de l'innovation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            Revivez la participation exclusive de nos étudiants au "Customer Engagement Day" organisé par MTN Congo. Une journée riche en découvertes technologiques.
          </p>
          <div className="w-20 h-1 bg-[#CC1122] mx-auto mt-6" />
        </div>

        {/* Grille de la vidéo */}
        <div className="max-w-4xl mx-auto bg-white p-4 rounded-xl shadow-lg border border-gray-100">
          {/* Conteneur 16:9 pour que la vidéo s'adapte aux téléphones */}
          <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingTop: "56.25%" }}>
            
           {/* L'intégration YouTube Officielle */}
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/tNTiD_gO8fs?rel=0" 
              title="IESC - MTN Customer Engagement Day" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;