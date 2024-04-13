import homeCSS from './Home.module.css'
import createCSS from '../create/Create.module.css'
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className={homeCSS.container}>
                <h1 className={createCSS.title}>Welcome to Vault 98</h1>
                <img className={homeCSS.logo} src="vault-tec-logo.png" />
                <div className={homeCSS.terminal}>
                    <div className={homeCSS.sysInfo}>
                        <p>ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM</p>
                        <p>COPYRIGHT 2075-2077 ROBCO INDUSTRIES</p>
                        <p>-Server 7-</p>
                    </div>
                    <p>Welcome, esteemed Overseer, to the genesis of your own Vault-Tec experiment! 
                    Here, you'll craft your cohort of intrepid vault dwellers, ready to brave the treacherous 
                    wasteland beyond our vault's safety!</p>
                    <hr />
                    <Link to="/create"><button className={homeCSS.button}>{">"} CLICK HERE TO GET STARTED</button></Link>
                </div>
            </div>
        </>
    )
}

export default Home