import { useState } from "react"
import homeCSS from "../home/Home.module.css"
import createCSS from "./Create.module.css"
import { supabase } from '../../client'
import Terminal from "../terminal/Terminal"

function Create() {

    return (
        <>
        <div className={homeCSS.container}>
            <h1 className={createCSS.title}>Create a Vault Dweller</h1>
            <Terminal />
        </div>
        </>
    )
}

export default Create