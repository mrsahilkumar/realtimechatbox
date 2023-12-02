function sendMessage() {
    const messageInput = document.getElementById('messageinput');
    const message = messageInput.value.trim();
    if (message !== '') {
      const chatMessages = document.querySelector('.messages');
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      messageInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
  
  document.getElementById('textbutton').addEventListener('click', sendMessage);
  document.getElementById('messageinput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  });