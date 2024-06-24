const allMessagesUrl = 'https://beskedserver.azurewebsites.net/api/Beskeder';
const specificRoomMessagesUrl = 'https://beskedserver.azurewebsites.net/api/SoegBeskeder/';
const chatRoomsUrl = 'https://beskedserver.azurewebsites.net/api/chatRum/';
const sendMessageUrl = 'https://beskedserver.azurewebsites.net/api/Beskeder';
const deleteMessageUrl = 'https://beskedserver.azurewebsites.net/api/Beskeder/';

let selectRoom = document.querySelector('#chatroomSelect');
let textArea = document.querySelector('#chatRoom');
let submitButton = document.querySelector('#submitMessage');
let currentRoom;

async function get(url) {
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error(response.status);
    }
    return await response.json();
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.json();
}

/* function getChatRooms(url) {
    let chatroomSelect = document.querySelector('#chatroomSelect');
    let promise = get(url);

    // If it resolves, create rooms
    promise.then(rooms => {
        rooms.forEach(room => {
            let optionRoom = document.createElement('option');
            optionRoom.id = room['navn'];
            optionRoom.textContent = room['navn'];
            chatroomSelect.appendChild(optionRoom);
        });
    }
    ).catch(error => {
        console.error("Error in .then(): " + error);
    })
}
 */
async function getChatRooms2(url) {
    try {
        let promise = await get(url);
        let chatroomSelect = document.querySelector('#chatroomSelect');
            promise.forEach(room => {
                let optionRoom = document.createElement('option');
                optionRoom.id = room['navn'];
                optionRoom.textContent = room['navn'];
                chatroomSelect.appendChild(optionRoom);
            });
    } catch (error) {
        console.error('Error in async-await: ' + error);
    }
}

async function postMessage(text) {
    try { 
        let messageObject = { 
            tekst: text,
            chatRum: currentRoom
        };
        let response = await post(sendMessageUrl, messageObject);
    } catch (error) {
        console.error('Error ' + error);
    }
}

function getMessagesForSpecificRoom(roomNumber) {
    textArea.value = "";
    let promise = get('https://beskedserver.azurewebsites.net/api/SoegBeskeder/' + roomNumber);
    
    promise.then(messages => {
        messages.forEach(message => {
            textArea.value += (`${message.id}` + ": " + `${message.tekst}\n`);
        })
    }).catch(error => {
        console.error("Error in getMessagesForSpecificRoom" + error);
    })
}

selectRoom.addEventListener('change', function() {
    let selectedRoom = this.value;
    if (currentRoom !== "" || selectedRoom.value !== currentRoom.value) {
        currentRoom = selectedRoom;
        getMessagesForSpecificRoom(selectedRoom);
    }
})

submitButton.addEventListener('click', function() {
    let text = document.querySelector('#messageInput').value;
    console.log(text);
    postMessage(text);
})

getChatRooms2(chatRoomsUrl);

