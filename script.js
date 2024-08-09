

/* Vote counter */

const voteBox = document.querySelector('.vote-box');
const voteCounter = voteBox.querySelector('.votes-counter');
const voteCountElement = voteCounter.querySelector('p');
const increaseButton = voteCounter.querySelector('.increase-votes');
const decreaseButton = voteCounter.querySelector('.decrease-votes');

let voteCount = parseInt(voteCountElement.textContent);

increaseButton.addEventListener('click', () => {
  voteCount++;
  voteCountElement.textContent = voteCount;
});

decreaseButton.addEventListener('click', () => {
  if (voteCount > 0) {
    voteCount--;
    voteCountElement.textContent = voteCount;
  }
});



/* Create chat box in JS */

async function createChatReplyBox() {

  const fetchedData = await fetchData();

  
  const currentUser = fetchedData.currentUser;
  const userName = currentUser.username;
  const userPhoto = currentUser.image.webp;

  const chatContainer = document.createElement('div');
  chatContainer.classList.add('chat-container');

  
  const chatReplyBox = document.createElement('div');
  chatReplyBox.classList.add('chat-reply-box');

  const userPhotoElement = document.createElement('img');
  userPhotoElement.src = userPhoto;
  userPhotoElement.alt = 'User Photo';
  userPhotoElement.classList.add('user-photo');

 
  const chatReply = document.createElement('div');
  chatReply.classList.add('chat-reply');

  const userNameElement = document.createElement('p');
  userNameElement.classList.add('user-name');
  userNameElement.textContent = userName;


  const replyForm = document.createElement('form');
  replyForm.classList.add('chat-reply-text');
  replyForm.action = '';
  replyForm.method = 'post';

  const inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.placeholder = 'Write your reply...';

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.classList.add('comment-reply-button');
  submitButton.value = 'SEND';


  replyForm.appendChild(inputText);
  replyForm.appendChild(submitButton);
  chatReply.appendChild(userNameElement);
  chatReply.appendChild(replyForm);
  chatReplyBox.appendChild(userPhotoElement);
  chatReplyBox.appendChild(chatReply);
  chatContainer.appendChild(chatReplyBox);

  return chatContainer;
}

async function fetchData() {
  const response = await fetch('./data.json'); 
  const data = await response.json();
  return data;
}



createChatReplyBox().then(replyBox => {
  document.body.appendChild(replyBox); 
});



