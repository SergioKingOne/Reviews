const reviews = [
    {
        id: 1,
        myName: "Sergio Robayo",
        job: "Web Designer",
        img: "https://pps.whatsapp.net/v/t61.24694-24/240413003_123613456726036_8594667390712420203_n.jpg?ccb=11-4&oh=01_AdTBZmMFxxQw85ll6Tdtmd0z7jW2aGhsaSGH1e_gcr97ng&oe=63ACC4F3",
        text: "YOLO"
    },
    {
        id: 2,
        myName: "Lionel Messi",
        job: "Soccer Player",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
        text: "Messirve"
    },
    {
        id: 3,
        myName: "Cristiano Ronaldo",
        job: "Soccer Player",
        img : "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
        text: `Cristiano Ronaldo dos Santos Aveiro 
        (pronunciación en portugués: /kɾiʃˈtiɐnu ʁuˈnaɫdu/; Funchal, 
        Madeira; 5 de febrero de 1985), conocido como 
        Cristiano Ronaldo es un futbolista portugués que 
        juega como extremo izquierdo o delantero. 
        Jugador histórico, estuvo ligado a diversos 
        equipos importantes, actualmente es agente libre 
        después de abandonar el plantel del Manchester United 
        Football Club el 22 de noviembre de 2022.19​Es 
        también internacional con la selección de Portugal, 
        equipo del que es capitán y máximo goleador histórico.`
    }
];

const img = document.getElementById("person-img");
const myName = document.getElementById("myName");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item

let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', ()=>{
    showPerson();
});

// show person based on item 

showPerson = () =>{
    const item = reviews[currentItem];
    img.src = item.img;
    myName.textContent = item.myName;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', ()=>{
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', ()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson();
});