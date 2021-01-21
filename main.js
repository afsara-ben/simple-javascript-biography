const reviews = [
{
    id:1,
    name: "Dr. Anita Borg",
    job: "Computer scientist",
    img: "images/person-1.jpg",
    info: "Borg founded the Institute for Women and Technology and the Grace Hopper Celebration of Women in Computing. She passionately believed in working for greater representation of technical women. Her goal was to have 50% representation for women in computing by 2020.[8] She strove for technical fields to be places where women would be equally represented at all levels of the pipeline, and where women could impact, and benefit from, technology.",
},

{
    id:2,
    name: "Dr. Radia perlman",
    job: "American computer programmer and network engineer",
    img: "images/person-2.jpg",
    info: "Radia Joy Perlman is most famous for her invention of the spanning-tree protocol (STP), which is fundamental to the operation of network bridges, while working for Digital Equipment Corporation. She also made large contributions to many other areas of network design and standardization, such as link-state routing protocols.",

},

{
    id:3,
    name: "Dr. Fei-Fei Li",
    job: "Computer scientist",
    img: "images/person-3.jpg",
    info: "Li has been described as an 'AI pioneer' and a 'researcher bringing humanity to AI. She is the Sequoia Capital Professor of Computer Science at Stanford University.She is a Co-Director of the Stanford Institute for Human-Centered Artificial Intelligence, and a Co-Director of the Stanford Vision and Learning Lab. She served as the director of the Stanford Artificial Intelligence Laboratory (SAIL) from 2013 to 2018. In 2017, she co-founded AI4ALL, a nonprofit organization working to increase diversity and inclusion in the field of artificial intelligence. Her research expertise includes artificial intelligence (AI), machine learning, deep learning, computer vision and cognitive neuroscience.",

},

{
    id:4,
    name: "Alexandria Ocasio-Cortez",
    job: "American politician",
    img: "images/person-4.jpg",
    info: " Congresswoman Alexandria Ocasio-Cortez is a third-generation Bronxite, educator, and organizer serving the 14th district of New York in the Bronx and Queens. Ocasio-Cortez grew up experiencing the reality of New York’s rising income inequality, inspiring her to organize her community and run for office on a progressive platform with a campaign that rejects corporate PAC funds.",

},
];

//select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".rand-btn");

let currentItem = 0; 
const len = reviews.length;
console.log(len);

//DOMContentLoaded calls when the initialization of the document has been done

window.addEventListener("DOMContentLoaded", function(){
   show();
});

function show()
{
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}

//next button function
next.addEventListener("click", function(){
    currentItem = (currentItem + 1)% len;
    console.log(currentItem);
    show();
});

//prev button function
prev.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0) currentItem = len-1;  //    currentItem = Math.abs(currentItem - 1)% len; will only loop betn 0 and 1
    console.log(currentItem);
    show();
});
//rand button function
randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random()*len);
    console.log(currentItem);
    show();
})
