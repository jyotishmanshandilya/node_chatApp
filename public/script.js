const socket = io()

const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat-input')
const chatWindow = document.querySelector('.chat-window');

const renderMessage=(message)=>{
    const div = document.createElement('div');
    div.classList.add('render-message');
    div.innerText = message;
    chatWindow.appendChild(div)
}

socket.on('chat', message=>{
    // console.log('From server: ', message);
    renderMessage(message);
})

chat.addEventListener('submit', event => {
    event.preventDefault()
    socket.emit('chat', Input.value) // sends data from client to server(name of event, data)
    Input.value = ''
})