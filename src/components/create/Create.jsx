import { useState } from "react"
import homeCSS from "../home/Home.module.css"
import createCSS from "./Create.module.css"
import { supabase } from '../../client'
import Terminal from "../terminal/Terminal"

function Create() {

    const s=1, p=1, e=1, c=1, i=1, a=1, l=1
    const max = 40 - (s+p+e+c+i+a+l)

    return (
        <div className={homeCSS.container}>
            <h1 className={createCSS.title}>Create a Vault Dweller</h1>
            <Terminal s={s} p={p} e={e} c={c} i={i} a={a} l={l} phName="Vault Dweller" isCreate={true} />
        </div>
    )
}

export default Create