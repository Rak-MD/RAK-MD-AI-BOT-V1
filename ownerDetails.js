```
const ownerDetails = {
  ownerName: '🔥 RAK 🔥',
  fullName: '👑 Roman Ali Kazmii 👑',
  from: '🏔️ Azad Kashmir 🏔️',
  favoritePlace: '❤️ Multan ❤️',
  favoritePerson: '😍 Aleeya Aleey 😍',
  whatsappNumber: '+923556206397 📱',
};

const sendOwnerDetails = (message) => {
  const details = `Hello! 👋\n\nHere are my details:\n\nName: ${ownerDetails.ownerName}\nFull Name: ${ownerDetails.fullName}\nFrom: ${ownerDetails.from}\nFavorite Place: ${ownerDetails.favoritePlace}\nFavorite Person: ${ownerDetails.favoritePerson}\nWhatsapp Number: ${ownerDetails.whatsappNumber}`;
  message.reply(details);
};

module.exports = { ownerDetails, sendOwnerDetails };
```
