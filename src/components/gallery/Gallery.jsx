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
            const { data } = await supabase
                .from('dwellers')
                .select()

            setData(data)
        }
        fetchDwellers()

    }, [])

    let totalS = 0, totalP = 0, totalE = 0, totalC = 0, totalI = 0, totalA = 0, totalL = 0
    let count = 0

    const avg = (totalStat, totalEntries) => {
        return totalStat / totalEntries
    }

    let highestVal = -Infinity
    let highestStat = 'NaN'

    if (data) {
        Object.entries(data).forEach(([dweller]) => {
            totalS += data[dweller].strength
            totalP += data[dweller].perception
            totalE += data[dweller].endurance
            totalC += data[dweller].charisma
            totalI += data[dweller].intelligence
            totalA += data[dweller].agility
            totalL += data[dweller].luck
            count += 1
        })

        let arr = [ ['Strength', avg(totalS, count)], ['Perception', avg(totalP, count)], ['Endurance', avg(totalE, count)], 
        ['Charisma', avg(totalC, count)], ['Intelligence', avg(totalI, count)],
        ['Agility', avg(totalA, count)], ['Luck', avg(totalL, count)] ]

        arr.forEach((element) => {
            if (element[1] > highestVal) {
                highestStat = element[0]
            }
        })
    }

    return (
        <>
            <h1 className={createCSS.title}>Vault Dweller Gallery</h1>
            <div className={galleryCSS.container}>
                {data && Object.entries(data).map(([dweller]) => (
                    <GalleryCard
                        key={data[dweller].id}
                        id={data[dweller].id}
                        name={data[dweller].name}
                        str={data[dweller].strength}
                        per={data[dweller].perception}
                        end={data[dweller].endurance}
                        cha={data[dweller].charisma}
                        int={data[dweller].intelligence}
                        agi={data[dweller].agility}
                        luc={data[dweller].luck}
                    />
                ))}
            </div>
            <div className={galleryCSS.stats}>
                <p>Combat Success Rate: {Math.round((totalS + totalE + totalA + totalL / 1.5) / ((10 * 3 * count) + 6.7 * count) * 100)}%</p>
                <p>Diplomacy Success Rate: {Math.round((totalP + totalC + totalI + totalL / 1.5) / ((10 * 3 * count) + 6.7 * count) * 100)}%</p>
                <p>Highest Avg SPECIAL: {highestStat}</p>
            </div>
        </>
    )
}

export default Gallery