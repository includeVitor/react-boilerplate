export const authService = {
    login
}

function login(email: string, password: string): Promise<Response> {
    const requestOptions = {
        method: 'POST',
        headers: [['Content-Type', 'application/json'], ['Accept', 'application/json']],
        body: JSON.stringify({
            user: { email: email, password: password }
        })
    };

    return fetch(`/users/sign_in.json`, requestOptions)
        .catch(() => {
            return Promise.reject('Backend not reachable');
        })
        .then(function (response: Response): any {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return (response.headers.get('Authorization') || '').split(' ')[1];
        })
}