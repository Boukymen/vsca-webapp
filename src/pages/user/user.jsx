import { useLocation, useNavigate, Navigate } from "react-router-dom"
import logOut from "../../utils/logout"
import './user.css'
import { useState } from "react"


export default function User() {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    const navigate = useNavigate()
    const [SS, setSS] = useState('')
    async function copy(token) {
        //const copyText = document.getElementById('token')
        navigator.clipboard.writeText(token);
        setSS('✔️ Copied to clipboard.')
        await sleep(700)
        setSS('')
    }
    async function handleClick() {
        await logOut().then(res => {
            localStorage.removeItem('user')
            navigate(
                '/'
            )
            console.log(res)
        })
    }
    const location = useLocation()
    //console.log(user)
    if (!localStorage.getItem('user') || !location.state) {
        return (
            <Navigate to="/"/>
        )
    }
    const user = location.state.user
    return (
        <div className="user--main-container">
            <section className="user--section">
                <div className="user-card">
                    <div className="avatar-container">
                        <img src={user.avatar} alt="avatar" className="avatar"/>
                    </div>
                    <div className="card-content">
                        <h3>Hello <span className="username">{user.username}</span> 👋</h3>
                        <p className="card-sub-head">Click to copy your VSA Token.</p>
                        <p className="token" onClick={() => copy(user.token)}>{user.token}</p>
                        <p className="invisible-text">{SS}</p>
                    </div>
                </div>
                <div className="btn-container">
                    <button onClick={() => handleClick()} className='logout-btn'>LogOut</button>
                </div>
            </section>
        </div>
    )
}