import fireapp from "./fireapp";
import { GithubProvider } from "./fireconstructor";
import 'firebase/auth';

export default function logOut() {
    return fireapp.auth().signOut().then(res => {
        console.log('Signed Out')
    }).catch(err => {
        console.log(err);
    })
}