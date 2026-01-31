import { useParams, Navigate } from 'react-router-dom';
import Article from '../components/Article';
import { getArticle } from '../services/articleService';

// Import all available images
import doggerlandImg from '../assets/images/Doggerland.jpg';
import nachtwachtImg from '../assets/images/Nachtwacht.jpg';
import deRuyterImg from '../assets/images/DeRuyter.jpg';
import hugoDeGroteImg from '../assets/images/Hugo de Grote.jpg';
import amsterdamImg from '../assets/images/Amsterdam1.jpg';
import landschapImg from '../assets/images/LandschapBijRhenen.jpg';
import erasmusImg from '../assets/images/Erasmus.jpg';
import afsluitdijkImg from '../assets/images/Afsluitdijk.avif';
import deltawerkenImg from '../assets/images/Deltawerken2.avif';
import flevolandImg from '../assets/images/Flevoland1.jpg';
import flevoland2Img from '../assets/images/Flevoland2.jpg';
import havenImg from '../assets/images/HavenRotterdam.jpg';
import ijburgImg from '../assets/images/IJburg.jpg';
import maaslandkeringImg from '../assets/images/Maaslandkering.jpg';
import vocImg from '../assets/images/VOC.jpg';
import meisjeMetDeParelImg from '../assets/images/MeisjeMetDeParel.jpg';
import rembrandtImg from '../assets/images/Rembrandt.jpg';
import amsterdamGoudenEeuwImg from '../assets/images/AmsterdamGoudenEeuw.jpg';
import amsterdamGoudenEeuw1Img from '../assets/images/AmsterdamGoudenEeuw1.jpg';
import rotterdamGoudenEeuwImg from '../assets/images/RotterdamGoudenEeuw.jpg';
import ridderVanOranjeImg from '../assets/images/RidderVanOranje.jpg';
import noordzeePolderenImg from '../assets/images/NoordzeePolderen.webp';
import waterwerkenImg from '../assets/images/Waterwerken1.jpg';

// Map image filenames to imported images
const imageMap = {
  'Doggerland.jpg': doggerlandImg,
  'Nachtwacht.jpg': nachtwachtImg,
  'DeRuyter.jpg': deRuyterImg,
  'Hugo de Grote.jpg': hugoDeGroteImg,
  'Amsterdam1.jpg': amsterdamImg,
  'LandschapBijRhenen.jpg': landschapImg,
  'Erasmus.jpg': erasmusImg,
  'Afsluitdijk.avif': afsluitdijkImg,
  'Deltawerken2.avif': deltawerkenImg,
  'Flevoland1.jpg': flevolandImg,
  'Flevoland2.jpg': flevoland2Img,
  'HavenRotterdam.jpg': havenImg,
  'IJburg.jpg': ijburgImg,
  'Maaslandkering.jpg': maaslandkeringImg,
  'VOC.jpg': vocImg,
  'MeisjeMetDeParel.jpg': meisjeMetDeParelImg,
  'Rembrandt.jpg': rembrandtImg,
  'AmsterdamGoudenEeuw.jpg': amsterdamGoudenEeuwImg,
  'AmsterdamGoudenEeuw1.jpg': amsterdamGoudenEeuw1Img,
  'RotterdamGoudenEeuw.jpg': rotterdamGoudenEeuwImg,
  'RidderVanOranje.jpg': ridderVanOranjeImg,
  'NoordzeePolderen.webp': noordzeePolderenImg,
  'Waterwerken1.jpg': waterwerkenImg,
};

/**
 * ArticlePage - Loads and displays an article based on URL slug
 */
function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  // If article not found, redirect to grote-werken
  if (!article) {
    return <Navigate to="/grote-werken" replace />;
  }

  // Get the image from the map
  const heroImage = article.image ? imageMap[article.image] : null;

  return (
    <Article
      title={article.title}
      sections={article.sections}
      image={heroImage}
      imageMap={imageMap}
    />
  );
}

export default ArticlePage;
