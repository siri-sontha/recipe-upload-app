

export default function InputForm() {
    return(
        <>
            <form className="form">
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" className="input" required/>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="email" className="input" required/>
                </div>
                <button type="submit">Login</button>
                <p>Create new account?</p>
            </form>
        </>
    )
}