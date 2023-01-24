// tady je místo pro náš program

// změna barvy písma nadpisu
let barva = document.querySelector('.nadpis');
barva.style.color = '#13529e';

// změna velikosti písma a stylu odstavce
let formatovani = document.querySelector('.odstavec');
formatovani.style.fontSize = '20px';
formatovani.style.fontStyle = 'italic';

//změna obrázku
let zvire = document.querySelector('.obrazek');
zvire.src = 'kocka.jpg';

//posunutí a otočení tvaru
let transformace = document.querySelector('.ctverecek');
transformace.style.marginLeft = '100px';
transformace.style.transform = 'rotate(-15deg)';


