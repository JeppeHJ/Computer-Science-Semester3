const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

// Asynkron funktion til at hente data fra en URL
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200)
        throw new Error(respons.status);
    return await respons.json();
}

// Asynkron funktion til at initialisere brugertabellen
async function letAwait(userUrl) {
    let response = await get(userUrl);
    generateTable(response);
}

// Funktion til at generere en tabel ud fra et array af objekter
function generateTable(array) {
    let body = document.querySelector('body');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tr1 = document.createElement('tr');
    table.appendChild(thead);
    thead.appendChild(tr1);

    // Opretter tabelheaders
    Object.keys(array[0]).forEach(key => {
        let th = document.createElement('th');
        th.textContent = key;
        tr1.appendChild(th);
    });

    // Opretter tabel body
    let tbody = document.createElement('tbody');
    array.forEach(person => {
        let row = document.createElement('tr');
        // Tilføjer en klikhåndterer til hver række
        row.addEventListener('click', () => loadUserPosts(person.id));
        Object.keys(person).forEach(key => {
            let cell = document.createElement('td');
            // Håndterer objekter i celler
            if (typeof person[key] === 'object' && person[key] !== null) {
                if (person[key].hasOwnProperty('city')) {
                    cell.textContent = person[key]['city'];
                } else if (person[key].hasOwnProperty('name')) {
                    cell.textContent = person[key]['name'];
                }
            } else {
                cell.textContent = person[key];
            }
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    body.appendChild(table);
}

// Funktion til at indlæse og vise en brugers posts
async function loadUserPosts(userId) {
    let posts = await get(postUrl + userId);
    generatePostsTable(posts);
}

// Funktion til at generere en tabel for posts
function generatePostsTable(posts) {
    let body = document.querySelector('body');

    // Fjerner en eksisterende post-tabel, hvis den findes
    let existingTable = document.getElementById('postsTable');
    if (existingTable) {
        body.removeChild(existingTable);
    }

    let table = document.createElement('table');
    table.id = 'postsTable';

    let thead = document.createElement('thead');
    let tr1 = document.createElement('tr');
    table.appendChild(thead);
    thead.appendChild(tr1);

    // Opretter headers for post-tabel
    if (posts.length > 0) {
        Object.keys(posts[0]).forEach(key => {
            let th = document.createElement('th');
            th.textContent = key;
            tr1.appendChild(th);
        });
    }

    // Opretter tabel body for posts
    let tbody = document.createElement('tbody');
    posts.forEach(post => {
        let row = document.createElement('tr');

    Object.keys(post).forEach(key => {
        let cell = document.createElement('td');
        cell.textContent = post[key];
        row.appendChild(cell);
    });
    tbody.appendChild(row);
    });

    table.appendChild(tbody);
    body.appendChild(table);
}
// Initierer hentning og visning af brugere ved indlæsning af siden
letAwait(userUrl);
