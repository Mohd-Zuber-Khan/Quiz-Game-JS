const screen1=document.querySelector("#screen1")
const screen2=document.querySelector("#screen2")
const screen3=document.querySelector("#screen3 ")
const start=document.querySelector("#screen3 ")
start.onclick=()=>{
    go.preventDefault();
    screen1.style.displays='none';
    screen2.style.displays='flex';
};
const data= [
    {
    questions:"2+2",
    answer:"4",
    options:[4,2,0,1]
    },
    {
        questions:"3*3",
        answer:"9",
        options:[4,2,6,0]
    },
    {
        questions:"2+2-4",
        answer:"0",
        options:[4,2,6,0]
    },
    {
        questions:"3+5-2",
        answer:"6",
        options:[3,5,6,2]
    },
    {
        questions:"6*2",
        answer:"12",
        options:[12,4,8,14]
    }
]