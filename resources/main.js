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
        myname: "Lionel Messi",
        job: "Soccer Player",
        img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
        text: "Messirve"
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
    const item = reviews[currentItem];
    img.src = item.img;
    myName.textContent = item.myName;
    job.textContent = item.job;
    info.textContent = item.text;
});