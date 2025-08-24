import Navbar from "./Navbar"

export default function Model({children, onClose}){
    return(
        <>
            <div className="backdrop" onClick={onClose}></div>
                <dialog className="modal" open>
                    {children}
                </dialog>
        </>
    )
}