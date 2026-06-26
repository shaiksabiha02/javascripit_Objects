// Function to wait for a given time
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Fetch with Retry
async function fetchWithRetry(url, { retries = 3 } = {}) {

    let waitTime = 500;

    for (let attempt = 1; attempt <= retries; attempt++) {

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            return await response.json();

        } catch (error) {

            if (attempt === retries) {
                throw new Error("All retry attempts failed.");
            }

            console.log(`Attempt ${attempt} failed. Retrying in ${waitTime} ms...`);

            await delay(waitTime);

            waitTime *= 2; // Exponential Backoff
        }
    }
}

// Example Usage
fetchWithRetry("https://jsonplaceholder.typicode.com/users", { retries: 3 })
    .then(data => console.log(data))
    .catch(error => console.error(error.message));


 // 2 nd problem
 
 async function fetchWithTimeout(url, ms) {

    
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request timed out"));
        }, ms);
    });

    
    const response = await Promise.race([
        fetch(url),
        timeoutPromise
    ]);

    
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
}

// Example Usage
fetchWithTimeout("https://jsonplaceholder.typicode.com/users", 3000)
    .then(data => console.log(data))
    .catch(error => console.log(error.message));

// problem 3

async function fetchAllPages(url) {

    let allUsers = [];
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages) {

        const response = await fetch(`${url}?page=${page}`);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        
        allUsers.push(...result.data);

        
        totalPages = result.total_pages;

        
        page++;
    }

    return allUsers;
}

// Example Usage
fetchAllPages("https://jsonplaceholder.typicode.com/users")
    .then(users => console.log(users))
    .catch(error => console.log(error.message));