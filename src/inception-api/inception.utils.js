const apiRootLocal = 'http://localhost:5000'

export const login = async (user, password) => {
    user = {
        username: user,
        password: password,
    }
    const loginResponse = await fetch(`${apiRootLocal}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(user)
    });
    const data = await loginResponse.json()
    return data
}