import CategoryCard from './CategoryCard';
import '../../assets/css/home-category.css';
import CasualWear from '../Assets/Playeras.jpg'; 
import FormalWear from '../Assets/Camisas.jpg';
import SportWear from '../Assets/Chamarras.jpg';
import Outerwear from '../Assets/Outerwear.jpg';
import Accessories from '../Assets/Accessories.jpg';

function Category() {
    
    const categories = [
    {
        title:'Playeras',
        image:CasualWear,
        link:'Playeras'
    }, 
    {
        title:'Camisas', 
        image:FormalWear,
        link:'Camisas'
    }, 
    {
        title:'Chamarras',
        image:SportWear,
        link:'Chamarras'
    },    
    ]

    return ( 
        <div className="Category">
            <h2>Categorias</h2>
            <div className="category-container">
            {categories.map((e, index) => <CategoryCard key={index} title={e.title} image={e.image} link={e.link} />)}
            </div>
        </div>
     );
}

export default Category;