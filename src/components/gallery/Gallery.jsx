import homeCSS from "../home/Home.module.css"
import { useState, useEffect } from "react"
import { supabase } from '../../client'
import GalleryCard from "./GalleryCard"
import galleryCSS from "./Gallery.module.css"
import createCSS from "../create/Create.module.css"

function Gallery() {

    const [data, setData] = useState()

    useEffect(() => {
        const fetchDwellers = async () => {
            const {data} = await supabase
                .from('dwellers')
                .select()

                setData(data)
        }
        fetchDwellers()
        
    }, [])

    return (
        <>
            <h1 className={createCSS.title}>Vault Dweller Gallery</h1>
            <div className={galleryCSS.container}>
                {data && Object.entries(data).map(([dweller]) =>
                    <GalleryCard
                        key = {data[dweller].id}
                        name = {data[dweller].name}
                        str={data[dweller].strength}
                        per={data[dweller].perception}
                        end={data[dweller].endurance}
                        cha={data[dweller].charisma}
                        int={data[dweller].intelligence}
                        agi={data[dweller].agility}
                        luc={data[dweller].luck}
                    />
                )}
            </div>
        </>
    )
}

export default Gallery