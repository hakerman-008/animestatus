const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


let usedUrls = [];


app.use(bodyParser.json());


app.get('/kshitiz', (req, res) => {
  
  const tiktokUrls = [
    'https://www.tiktok.com/@kshitizgrxy/video/7329103393945832712?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7328731861025393928?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7328360638244293906?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7327247192358440200?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7326875765994229000?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7326505088049106184?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7325762731687136519?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7325391962490653970?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7324278802157178130?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7323907706434227464?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7323536627236637960?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7322794365938601234?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7322424144669199634?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7322052027926809863?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7321680951476489490?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7320938876330200327?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7320568092600405256?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7319825690067750152?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7319450439794035986?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7317970407657622791?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7316857251598208274?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7316486329431280903?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7316114721780944135?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7315003263475027207?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7314630572997971207?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7313888119818882312?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7313146275195555079?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7311662330796903698?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7311291649055853832?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7310920257965755666?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7310548967488539911?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7310178190859783431?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7309806705657842962?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7309435617526500616?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7309064726263155986?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7308693365669776648?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7308323784170179858?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7307586317464964370?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7307213400935828743?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7306837793618038023?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7306466706992499976?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7306103584158993671?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7305724546290601234?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7305353314810531080?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7304239944711671058?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7303498335049010439?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7303127739588988167?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7302756368904228103?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7302384436165774599?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7302014115390770450?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7300902856444480786?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7300529189852138760?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7300158260936477959?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7299416504125132040?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7298309197505039624?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7297560857997823240?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7297191349218987272?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7296818684041923848?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7296076016831696146?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7295334138532482312?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7294963433143913736?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7294593018747817224?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7294221978305596680?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7293478406203772168?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7292737272242326792?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7291994429559278856?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7291623097436818696?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7290881030750309640?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7290510054355225864?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7290141259765763335?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7289396683912334600?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7289026376781401352?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7288655264079858952?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7288283748641099026?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7287912336331967751?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7287541248271863048?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7287170542111690002?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7286799119966915848?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7286427949975211282?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7286058769077767431?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7285686222888963335?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7285314726580522248?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7284944266873343239?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7284573208873880850?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7284202245686594834?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7283831644274822407?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7282718039718579463?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7281604155318209800?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7280862753630227719?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7152087837142175003?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7152454601919319322?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7152825674045066522?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7153199713850821915?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7153570493012987162?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7153938846835658010?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7153939296741772570?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7154317663131520282?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7154682030075202843?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7155052631029746970?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7155426625830620443?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7155797129229896987?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7156539839993711898?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7156911291507002650?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7157281823595220250?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7158394095147257115?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7255243203492760850?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7255994965396950280?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7277893132694326536?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7277151150141410578?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7276041635228585234?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7275687233980484872?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7275295453913156871?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7274924435822349575?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7274553476309355794?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7273446073782308103?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7271584571072744722?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7271231863505554695?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7270476414170778888?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7270104347806158088?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7269733768468991240?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7269362887909444871?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7268991071399513352?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7268621174433762568?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7268248986492865810?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7267499315843665154?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7267136952267263233?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7267128212268797186?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7266789447721635073?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7266392621638077698?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7266385443934031106?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7263052232256441602?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7263046971827424514?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7262679214212615426?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7262674946810252545?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7262303635390893313?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7261952271234403586?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7261188410390351105?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7260447020190551298?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@kshitizgrxy/video/7258589159206472967?is_from_webapp=1&sender_device=pc',
  
  
  
    
  ];

  
  const availableUrls = tiktokUrls.filter(url => !usedUrls.includes(url));

  if (availableUrls.length === 0) {
    
    usedUrls = [];
  } else {
   
    const randomUrl = availableUrls[Math.floor(Math.random() * availableUrls.length)];

   
    usedUrls.push(randomUrl);

    
    res.json({ url: randomUrl });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
