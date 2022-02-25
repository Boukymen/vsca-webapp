import fireapp from "./fireapp";
import { getDatabase, ref, set, get, update } from 'firebase/database'

const db = getDatabase(fireapp);

export function setData(user, key) {
    set(
        ref(db, `user_data/` + user), {
            token: key
        }
    ).then(
        () => {
            console.log('set data success');
        }
    )
}