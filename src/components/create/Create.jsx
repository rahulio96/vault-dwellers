import homeCSS from "../home/Home.module.css"
import createCSS from "./Create.module.css"

function Create() {
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
                <img className={createCSS.boy} src="vault-boy.jpg"/>
                <hr />
                <button className={homeCSS.button}>{">"} Strength</button>
                <button className={homeCSS.button}>{">"} Perception</button>
                <button className={homeCSS.button}>{">"} Endurance</button>
                <button className={homeCSS.button}>{">"} Charisma</button>
                <button className={homeCSS.button}>{">"} Intelligence</button>
                <button className={homeCSS.button}>{">"} Agility</button>
                <button className={homeCSS.button}>{">"} Luck</button>
            </div>
        </div>
        </>
    )
}

export default Create