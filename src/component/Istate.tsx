"use client"
import { useState } from "react";

const Istate = () => {
    const [state, setState] = useState(0);
    return (
        <div>
            <button style={{ padding: "10px 20px" }} onClick={() => setState(state + 1)}>{state}</button>
        </div>
    );

};
export default Istate;