/**
 * Description [Access endpoint for phones.]
 * @return { Array }
 */
export const mockablePhones = () => {
    const PHONES_API_ENDPOINT = `http://localhost:3000/phones`;

    return fetch(PHONES_API_ENDPOINT)
        .then(response => {
            return response.json()
        })
};