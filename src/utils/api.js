export default function getUser(id) {
    return fetch('https://api.github.com/user/' + id)
    .then(
        res => res.json()
    )
    .then(
        data => {
            return data;
        }
    )
    .catch(err => {
        console.log(err);
    })
}