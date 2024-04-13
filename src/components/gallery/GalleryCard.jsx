import galleryCSS from "./Gallery.module.css"
import { Link } from "react-router-dom"

function GalleryCard({ id, name, str, per, end, cha, int, agi, luc }) {
    return (
            <Link to={`/dweller/${id}`} className={galleryCSS.card}>
                <div className={galleryCSS.cardContent}>
                <img className={galleryCSS.cardImg} src="vault-boy.jpg"/>
                <ul className={galleryCSS.cardText}>
                    <li style={{color: "white"}}>Name: {name}</li>
                    <li>Strength: {str}</li>
                    <li>Perception: {per}</li>
                    <li>Endurance: {end}</li>
                    <li>Charisma: {cha}</li>
                    <li>Intelligence: {int}</li>
                    <li>Agility: {agi}</li>
                    <li>Luck: {luc}</li> 
                </ul>
                
                </div>
            </Link>
    )
}

export default GalleryCard