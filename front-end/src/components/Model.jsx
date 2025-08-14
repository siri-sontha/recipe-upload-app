import Navbar from "./Navbar"

export default function Model({onClose}){
    return(
        <>
            <div className="backdrop" onClick={onClose}></div>
                <dialog className="modal" open>
                    <h1>Hello</h1>
                </dialog>
        </>
    )
}