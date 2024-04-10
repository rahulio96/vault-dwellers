import { useState } from "react"
import homeCSS from "../home/Home.module.css"
import createCSS from "./Create.module.css"

function Create() {
    const [str, setStr] = useState(1)
    const [per, setPer] = useState(1)
    const [end, setEnd] = useState(1)
    const [cha, setCha] = useState(1)
    const [int, setInt] = useState(1)
    const [agi, setAgi] = useState(1)
    const [luc, setLuc] = useState(1)

    /*
        "Endurance" : end,
        "Charisma" : cha,
        "Intelligence" : int,
        "Agility" : agi,
        "Luck" : luc
    */
    let statList = [
        ["Strength", str],
        ["Perception", per],
        ["Endurance", end],
        ["Charisma", cha],
        ["Intelligence", int],
        ["Agility", agi],
        ["Luck", luc]

    ]

    return (
        <>
        <div className={homeCSS.container}>
            <h1 className={homeCSS.title}>Create a Vault Dweller</h1>
            <div className={createCSS.terminal}>
                <div className={homeCSS.sysInfo}>
                        <p>ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM</p>
                        <p>COPYRIGHT 2075-2077 ROBCO INDUSTRIES</p>
                        <p>-Server 8-</p>
                </div>
                <p>Before venturing into the Wasteland, ensure your Vault Dweller is properly prepared. 
                Utilize our cutting-edge genetic modification technology to customize your Dweller for optimal survival. 
                Remember, a well-prepared Vault Dweller is a safer Vault Dweller.</p>        
                <hr />
                <div className={createCSS.stats}>
                    <div className={createCSS.btnContainer}>

                    {statList.map((stat, index) => 
                        
                        <div key={index} className={createCSS.button}>
                            {stat[0]}
                            <div className={createCSS.number}>{stat[1]}</div>
                        </div>
                    )}
                    
                    </div>
                    <img className={createCSS.boy} src="vault-boy-2.png"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Create