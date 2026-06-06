import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
  return (
    <Helmet>
      {/* Titre qui s'affiche dans l'onglet du navigateur et sur Google */}
      <title>{title} | IESC Brazzaville</title>
      
      {/* Description qui s'affiche sous le lien sur Google */}
      <meta name="description" content={description} />
      
      {/* Mots-clés pour le référencement */}
      <meta name="keywords" content={keywords || "IESC, Université Congo, Brazzaville, Enseignement Supérieur, Licence, Master"} />
      
      {/* Balises pour que le lien soit beau quand on le partage sur WhatsApp ou Facebook */}
      <meta property="og:title" content={`${title} | IESC Brazzaville`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;