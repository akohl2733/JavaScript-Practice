async function getUser(userIds){
    for (id in userIds){
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("User data:", data);
        } catch (err) {
            console.error(`Failed to fetch user #${id}:`, err.message);
        }
    }
}

getUser([1, 2, 1000])