import { GithubProvider } from "../../utils/fireconstructor"
import socialAuth from "../../utils/auth"
import getUser from "../../utils/api";
import { Navigate, useNavigate } from 'react-router-dom'
import { Base64 } from "js-base64";
import utf8 from 'utf8'
import Cookies from 'js-cookie'
import { setData } from "../../utils/database";
import './home.css'
import { FaGithub } from "react-icons/fa";

export default function Home() {
    const navigate = useNavigate()
    async function handleClick(provider) {
        const res = await socialAuth(provider);
        const user = await getUser(res.providerData[0].uid);
        const rand = Math.floor((Math.random() * 100) + 1);
        const key = (!Cookies.get('vsa_token')) ? Base64.encode(utf8.encode(user.login + ':' + new Date().toDateString()) + rand.toString()) : Cookies.get('vsa_token');
        navigate(
            '/user', 
            { state: 
                { user: 
                    {
                        'username': user.login,
                        'avatar': user.avatar_url,
                        'name': user.name,
                        'token': key
                    } 
                } 
            }
        )
        localStorage.setItem(
            'user', 
            JSON.stringify(
                {
                    'username': user.login,
                    'avatar': user.avatar_url,
                    'name': user.name,
                    'token': key
               }
            )
        )
        Cookies.set('vsa_token', key)
        setData(user.login, key)
    }
    if (localStorage.getItem('user')) {
        return (
            <Navigate to="/user" state={{'user' : JSON.parse(localStorage.getItem('user'))}}/>
        )
    }
    return (
        <div className="home--main-container">
            <section className="home--section">
                <h2 className="home--heading">Display your <span className="vs-code-text">VS Code</span> activity on <span className="github-text">GitHub</span>.</h2>
                <button onClick={() => handleClick(GithubProvider)} className='home--login-button'><FaGithub color="#FFFFF" size="1.1rem"/><span>Login</span></button>
            </section>
        </div>
    )
}