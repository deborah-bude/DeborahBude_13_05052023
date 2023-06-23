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
        if (!response.ok) {
            return Promise.reject('Invalid credentials')
        }
        return response.json()
     })
}

export function userDataProfile(token) {
    const url = `http://localhost:3001/api/v1/user/profile`;

    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(function (response) {
            return response.json()
        })
        .catch((err) => {
            console.log(err.message);
        });
}

export function editProfileName(token, firstName, lastName) {
    const url = `http://localhost:3001/api/v1/user/profile`;
    const userName= {
        "firstName": firstName,
        "lastName": lastName
    };

    return fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userName)
    })
        .then(function (response) {
            if (!response.ok) {
                if (response.status === 401) {
                    return Promise.reject('Invalid name')
                }
                return Promise.reject('Invalid credentials')
            }
            return response.json()
        })
        .catch((err) => {
            console.log(err.message);
        });
}