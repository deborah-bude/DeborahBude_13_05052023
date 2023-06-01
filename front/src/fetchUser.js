export function userDataLog(email, password) {
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
    .catch((err) => {
        console.log(err.message);
    });
}

export function userDataProfile(token) {
    const url = `http://localhost:3001/api/v1/user/profile`;

    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify()
    })
        .then(function (response) {
            return response.json()
        })
        .catch((err) => {
            console.log(err.message);
        });
}

export function editProfileName(token) {
    const url = `http://localhost:3001/api/v1/user/profile`;

    return fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify()
    })
        .then(function (response) {
            return response.json()
        })
        .catch((err) => {
            console.log(err.message);
        });
}