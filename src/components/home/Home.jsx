import Navbar from "../navbar/Navbar"
import homeCSS from './Home.module.css'

function Home() {
    return (
        <>
            <Navbar />
            <div className={homeCSS.container}>
                <img className={homeCSS.logo} src="vault-tec-logo.png" />
                <h1 className={homeCSS.title}>Welcome to Vault 98</h1>
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
                    <button className={homeCSS.button}>{">"} CLICK HERE TO GET STARTED</button>
                </div>
            </div>
        </>
    )
}

export default Home