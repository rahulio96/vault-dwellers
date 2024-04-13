import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from '../../client'

function Dweller() {

    let params = useParams()

    const [data, setData] = useState()

    useEffect(() => {
        const fetchDwellers = async () => {
            const {data} = await supabase
                .from('dwellers')
                .select()
                .eq('id', params.id)

                console.log(data)
                setData(data)
        }
        fetchDwellers()
        
    }, [])

    return (
        <></>
    )
}

export default Dweller