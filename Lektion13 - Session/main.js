async function clickFunction(id) {
    try {
        await post('/buy', { id: id });
        window.location.reload();
    } catch (error) {
        console.error('Fejl:', error);
    }
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.text();
}
