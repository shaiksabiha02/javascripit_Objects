// Without using faltten
function flattenDeep(arr) {

    let stack = [...arr];
    let result = [];

    while (stack.length > 0) {

        let current = stack.pop();

        if (Array.isArray(current)) {

            for (let i = current.length - 1; i >= 0; i--) {
                stack.push(current[i]);
            }

        } else {

            result.unshift(current);
        }
    }

    return result;
}

console.log("NEW CODE RUNNING");

const nested = [1, [2, [3, [4, [5]]]]];

console.log(flattenDeep(nested));

// Matrix

function spiralMatrix(n) {

    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];
    }

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    let num = 1;

    while (top <= bottom && left <= right) {

        // Left to Right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        // Top to Bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        // Right to Left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }

        // Bottom to Top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }

    return matrix;
}

const spiralResult = spiralMatrix(3);

for (let row of spiralResult) {
    console.log(row.join(" "));
}

// no.promise.all

async function fetchUsersSequentially() {

    const userIdsList = [1, 2, 3, 4, 5];

    for (const currentUserId of userIdsList) {

        const apiResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${currentUserId}`
        );

        const userData = await apiResponse.json();

        console.log(
            `ID: ${userData.id}, Name: ${userData.name}, Email: ${userData.email}`
        );
    }
}

async function fetchUsersSequentially() {

    const userIdsList = [1, 2, 3, 4, 5];

    for (const currentUserId of userIdsList) {

        const apiResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${currentUserId}`
        );

        const userData = await apiResponse.json();

        console.log(
            `ID: ${userData.id}, Name: ${userData.name}, Email: ${userData.email}`
        );
    }
}

// no Promise.all

async function fetchUsersSequentially() {

    const userIdsList = [1, 2, 3, 4, 5];

    for (const currentUserId of userIdsList) {

        const apiResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${currentUserId}`
        );

        const userData = await apiResponse.json();

        console.log(
            `ID: ${userData.id}, Name: ${userData.name}, Email: ${userData.email}`
        );
    }
}
fetchUsersSequentially();