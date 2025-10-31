function displayBirthday() {
   const name = document.getElementById('name').value || 'Love';
   const age = document.getElementById('age').value;
   const dobInput = document.getElementById('dob').value;
   const dob = dobInput ? new Date(dobInput) : null;
   const pictureFile = document.getElementById('picture').files[0];

   if (pictureFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
         document.getElementById('birthdayImage').src = e.target.result;
      };
      reader.readAsDataURL(pictureFile);
   }

   document.getElementById('birthdayName').textContent = `Happy Birthday, ${name} ❤️`;
   if (age) document.getElementById('birthdayAge').textContent = `${age} years old`;
   if (dob) document.getElementById('birthdayDate').textContent = dob.toLocaleDateString();

   document.getElementById('birthdayHeader').style.display = 'block';

   // Show new gifts grid and footer
   const giftsGrid = document.querySelector('.gifts-grid');
   if (giftsGrid) giftsGrid.style.display = 'grid';
   const footer = document.querySelector('.footer');
   if (footer) footer.style.display = 'block';

   // hide form
   document.querySelector('.form-container').style.display = 'none';

   // Play the audio if available
   const audio = document.getElementById('birthdayAudio');
   if (audio && typeof audio.play === 'function') {
      audio.currentTime = 0;
      audio.play().catch(() => {});
   }

   // spawn floating hearts
   spawnHearts(12);
}

function spawnHearts(count) {
   for (let i = 0; i < count; i++) {
      setTimeout(() => {
         const heart = document.createElement('div');
         heart.className = 'floating-heart';
         heart.style.left = (10 + Math.random() * 80) + '%';
         heart.style.fontSize = (14 + Math.random() * 24) + 'px';
         heart.textContent = '❤';
         document.body.appendChild(heart);
         setTimeout(() => heart.remove(), 2800);
      }, i * 120);
   }
}

// Open modal with specific content and image
function openModal(title, message, imageSrc) {
   const modalContainer = document.getElementById('modal-container');
   const modalTitle = document.getElementById('modal-title');
   const modalMessage = document.getElementById('modal-message');
   const modalImage = document.getElementById('modal-image');

   modalTitle.textContent = title;
   modalMessage.textContent = message;
   modalImage.src = imageSrc;
   modalImage.style.display = 'block';

   modalContainer.style.display = 'flex';
   document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close modal
function closeModal() {
   const modalContainer = document.getElementById('modal-container');
   modalContainer.style.display = 'none';
   document.body.style.overflow = 'auto'; // Restore scrolling
}

// Add event listeners to gift cards
const giftCards = document.querySelectorAll('.gift-card');
const giftData = [
   {
      title: 'How happy I am for you 🥰',
      message: 'You light up my life every day. Keep shining! You are the reason behind my smiles and the joy in my heart. Your presence makes everything better, and I am so grateful for you. You inspire me to be the best version of myself, and I cherish every moment we share. Thank you for being my rock, my confidant, and my greatest supporter. You are truly one of a kind, and I am so lucky to have you in my life. Here’s to more laughter, love, and unforgettable memories together. You are my everything, and I adore you endlessly.',
      image: 'images/1st.jpeg'
   },
   {
      title: 'When you walk in the room 😍',
      message: 'Your presence makes everything better. You are amazing! You have a way of lighting up every room you enter, and your energy is simply contagious. Your kindness, warmth, and love make the world a better place, and I am so lucky to know you. You inspire everyone around you with your strength and positivity, and I am constantly in awe of you. Thank you for being the incredible person you are. You are my sunshine on a cloudy day, and I am so grateful for you. Here’s to celebrating you and all the wonderful things you bring to my life.',
      image: 'images/2nd.jpeg'
   },
   {
      title: 'One word: Brilliant ✨',
      message: 'Your intelligence and kindness inspire me every day. You have a way of making everything seem possible, and your determination and drive are truly admirable. You are a shining example of what it means to be brilliant, and I am so proud of all that you have accomplished. Your kindness and compassion make you even more extraordinary, and I am so lucky to have you in my life. Thank you for being my guiding light and for always believing in me. You are my greatest inspiration, and I am so grateful for you. Here’s to celebrating your brilliance and all the amazing things you do.',
      image: 'images/3rd.jpeg'
   },
   {
      title: 'My Love ❤️',
      message: 'You are my everything. Thank you for being you. You have brought so much love and happiness into my life, and I cannot imagine a day without you. Your love is my greatest treasure, and I am so grateful for you. You are my partner, my best friend, and my greatest supporter, and I am so lucky to have you by my side. Thank you for being my rock and for always being there for me. You are my heart and soul, and I love you more than words can say. Here’s to a lifetime of love, laughter, and happiness together.',
      image: 'images/4th.jpeg'
   },
   {
      title: 'Cheers to you 🥂',
      message: 'Here’s to more laughter, love, and unforgettable moments! You have brought so much joy and happiness into my life, and I am so grateful for you. Your love and support mean the world to me, and I am so lucky to have you in my life. Thank you for being my partner, my best friend, and my greatest supporter. You are my everything, and I am so grateful for you. Here’s to celebrating you and all the wonderful things you bring to my life. You are my sunshine on a cloudy day, and I am so grateful for you.',
      image: 'images/5th.jpeg'
   },
   {
      title: 'Forever Thankful 🙏',
      message: 'Words cannot express how much you mean to me. You have been my rock, my inspiration, and my greatest source of joy. Every moment spent with you is a treasure, and I am endlessly grateful for your love, kindness, and unwavering support. You make my world brighter and my heart fuller. Thank you for being the incredible person you are. I am so lucky to have you in my life, and I cherish every memory we create together. Here’s to many more moments of happiness, laughter, and love. You are truly one of a kind, and I adore you more than words can say.',
      image: 'images/6th.jpeg'
   }
];

giftCards.forEach((card, index) => {
   card.addEventListener('click', () => {
      const { title, message, image } = giftData[index];
      openModal(title, message, image);
   });
});
