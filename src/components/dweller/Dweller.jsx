import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from '../../client'
import createCSS from '../create/Create.module.css'
import homeCSS from '../home/Home.module.css'
import Terminal from "../terminal/Terminal"
function Dweller() {
    let params = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchDwellers = async () => {
            const { data } = await supabase
                .from('dwellers')
                .select()
                .eq('id', params.id)

                setData(data[0]) // Assuming there's only one dweller with this id
        }
        fetchDwellers()
    }, [params.id])

    if (!data) {
        return <></>
    }

    const { strength: s, perception: p, endurance: e, charisma: c, intelligence: i, agility: a, luck: l, name: n } = data

    return (
        <div className={homeCSS.container}>
            <h1 className={createCSS.title}>Edit Vault Dweller</h1>
            {data && <Terminal s={s} p={p} e={e} c={c} i={i} a={a} l={l} phName={n}/>}
        </div>
    )
}

export default Dweller
