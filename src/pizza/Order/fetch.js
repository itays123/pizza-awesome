export const fetchNewPizza = (token, pizza) => fetch('/api', {
    method: 'POST',
    body: JSON.stringify({ ...pizza }),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});