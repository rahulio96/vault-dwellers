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

    let statList = [
        ["Strength", str, "Strength is a measure of your raw physical power. It affects how much you can carry, the power of all melee attacks, and your effectiveness with many heavy weapons."],
        ["Perception", per, "A high Perception grants a bonus to the Explosives, Lockpick and Energy Weapons, and determines when red compass markings appear (which indicate threats)."],
        ["Endurance", end, "Endurance is a measure of your overall physical fitness. A high Endurance gives bonuses to health, environmental resistances, and the Survival and Unarmed skills."],
        ["Charisma", cha, "Having a high Charisma will improve people's disposition towards you, and give bonuses to both the Barter and Speech skills."],
        ["Intelligence", int,"Intelligence affects the Science, Repair and Medicine skills. The higher your Intelligence, the more Skill Points you'll be able to distribute when you level up."],
        ["Agility", agi, "Agility affects your Guns and Sneak skills, and the number of Action Points available for V.A.T.S."],
        ["Luck", luc, "Raising your luck will raise all of your skills a little. Having a high Luck will also improve your critical chance with all weapons."]
    ]

    const [desc, setDesc] = useState(null)

    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = (stat) => {
        setIsHover(true)
        setDesc(stat[2])
    }

    const handleMouseLeave = () => {
        setIsHover(false)
        setDesc(null)
    }

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
                        
                        <div key={index} className={createCSS.button} onMouseEnter={() => handleMouseEnter(stat)} onMouseLeave={handleMouseLeave}>
                            {stat[0]}
                            <div className={createCSS.number}>{stat[1]}</div>
                        </div>
                    )}
                    
                    </div>
                    <div className={createCSS.desc} style={{ opacity: isHover ? 1 : 0 }}>{desc}</div>
                    <img className={createCSS.boy} src="vault-boy-2.png"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Create