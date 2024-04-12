import { useState } from "react"
import homeCSS from "../home/Home.module.css"
import createCSS from "./Create.module.css"
import { supabase } from '../../client'

function Create() {

    const defaultMsg = "Choose wisely, as these stats will determine their abilities in the harsh Wasteland."
                        + " Your decision will shape the future of your Vault Dweller."
    const maxPointPool = 33
    const maxPoints = 10
    const minPoints = 1
    const [pool, setPool] = useState(33)

    const addPoint = (num, setNum) => {
        let cur = num + 1
        let curPool = pool - 1
        if (cur <= maxPoints && curPool >= 0) {
            setNum(cur)
            setPool(curPool)
        }  
    }

    const subPoint = (num, setNum) => {
        let cur = num - 1
        let curPool = pool + 1
        if (cur >= minPoints && curPool <= maxPointPool) {
            setNum(cur)
            setPool(curPool)
        }
    }

    const [name, setName] = useState("Vault Dweller")
    const [str, setStr] = useState(1)
    const [per, setPer] = useState(1)
    const [end, setEnd] = useState(1)
    const [cha, setCha] = useState(1)
    const [int, setInt] = useState(1)
    const [agi, setAgi] = useState(1)
    const [luc, setLuc] = useState(1)

    const [hoverPlus, setHoverPlus] = useState(null)
    const [hoverMin, setHoverMin] = useState(null)

    let statList = [
        ["Strength", str, setStr, "Strength is a measure of your raw physical power. It affects how much you can carry, the power of all melee attacks, and your effectiveness with many heavy weapons."],
        ["Perception", per, setPer, "A high Perception grants a bonus to the Explosives, Lockpick and Energy Weapons, and determines when red compass markings appear (which indicate threats)."],
        ["Endurance", end, setEnd, "Endurance is a measure of your overall physical fitness. A high Endurance gives bonuses to health, environmental resistances, and the Survival and Unarmed skills."],
        ["Charisma", cha, setCha, "Having a high Charisma will improve people's disposition towards you, and give bonuses to both the Barter and Speech skills."],
        ["Intelligence", int, setInt, "Intelligence affects the Science, Repair and Medicine skills. The higher your Intelligence, the more Skill Points you'll be able to distribute when you level up."],
        ["Agility", agi, setAgi, "Agility affects your Guns and Sneak skills, and the number of Action Points available for V.A.T.S. Higher agility also equates to faster movement speed."],
        ["Luck", luc, setLuc, "Raising your luck will raise all of your skills a little. Having a high Luck will also improve your critical chance with all weapons."]
    ]

    const [desc, setDesc] = useState(defaultMsg)

    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = (stat) => {
        setIsHover(true)
        setDesc(stat[3])
    }

    const handleMouseLeave = () => {
        setIsHover(false)
        setDesc(defaultMsg)
    }

    const changeName = (e) => {
        setName(e.target.value)
    }

    const createDweller = async (e) => {
        e.preventDefault();

        await supabase
          .from('dwellers')
          .insert({
            name: name, strength: str, perception: per, endurance: end,
            charisma: cha, intelligence: int, agility: agi, luck: luc
            })
          .select();
    }

    return (
        <>
        <div className={homeCSS.container}>
            <h1 className={createCSS.title}>Create a Vault Dweller</h1>
            <div className={createCSS.terminal}>
                <div className={homeCSS.sysInfo}>
                        <p>ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM</p>
                        <p>COPYRIGHT 2075-2077 ROBCO INDUSTRIES</p>
                        <p>-Server 8-</p>
                </div>
                <p>Before venturing into the Wasteland, ensure your Vault Dweller is properly prepared. It's time to assign SPECIAL stats to your custom Vault Dweller.
                Utilize our cutting-edge genetic modification technology to customize your Dweller for optimal survival. 
                Remember, a well-prepared Vault Dweller is a safer Vault Dweller.</p>        
                <hr />
                <div className={createCSS.stats}>
                    <div className={createCSS.btnContainer}>

                    {statList.map((stat, index) => 
                        
                        <div key={index} className={createCSS.button} onMouseEnter={() => handleMouseEnter(stat)} onMouseLeave={handleMouseLeave}>
                            {stat[0]}
                            <div className={createCSS.number}>
                                <img className={createCSS.statBtn} 
                                    src={index === hoverMin ? 'minus-hover.png' : 'minus.png'} 
                                    onMouseEnter={() => setHoverMin(index)}
                                    onMouseLeave={() => setHoverMin(null)}
                                    onClick={() => subPoint(stat[1], stat[2])}
                                />
                                <div className={createCSS.statNum}>{stat[1]}</div>
                                
                                <img className={createCSS.statBtn} 
                                    src={index === hoverPlus ? 'plus-hover.png' : 'plus.png'} 
                                    onMouseEnter={() => setHoverPlus(index)}
                                    onMouseLeave={() => setHoverPlus(null)}
                                    onClick={() => addPoint(stat[1], stat[2])}
                                />
                            </div>
                        </div>
                    )}

                    <div className={createCSS.remaining}>Remaining Points: {pool}</div>
                    <div onChange={changeName} className={createCSS.remaining}>Name: <input placeholder="Vault Dweller" type="text"></input></div>
                    <div onClick={createDweller} className={createCSS.button}>{"> "}Create Character</div>
                    
                    </div>
                    <div className={createCSS.descContainer}>
                        <div className={createCSS.desc}>{desc}</div>
                        <img className={createCSS.boy} src="vault-boy-2.png"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Create