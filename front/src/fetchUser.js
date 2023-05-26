export function userData(email, password) {
    const url = `http://localhost:3001/api/v1/user/login`;
    const user = {
        "email": email, 
        "password": password
    };

    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    .then(function (response) {
        return response.json()
     })
     .then(function (resultatApi) {
       console.log(resultatApi) // contient le token
       return resultatApi
     })
    .catch((err) => {
        console.log(err.message);
    });
}