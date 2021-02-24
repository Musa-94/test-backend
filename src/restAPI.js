const fetch = require('node-fetch');

const getAllUsers = async data => {
    const response = await fetch('http://185.129.2.58:8997/v2/getAllUsers.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => response)

    return response;
}

module.exports = {
    getAllUsers,
}