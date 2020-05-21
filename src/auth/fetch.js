const getHeaders = () => ({
    'Content-Type': 'application/json'
})

const request = (path, body) => fetch(`/auth/${path}`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(body)
});

export const fetchLogin = (email, password) => request('signin', { email, password });
export const fetchSignup = (email, password, address) => request('signup', { email, password, address });

export const fetchUpdate = (token, field, data) => fetch('/auth/', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ query: { field, data } })
})