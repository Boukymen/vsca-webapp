import fireapp from "./fireapp";
import { GithubProvider } from "./fireconstructor";
import 'firebase/auth';

export default function socialAuth(provider) {
    return fireapp.auth().signInWithPopup(provider).then(res => {
        return res.user;
    }).catch(err => {
        console.log(err);
    })
}

