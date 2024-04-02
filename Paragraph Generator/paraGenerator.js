const input=document.getElementById(`numberofwords`);
const btn=document.getElementById(`mybtn`);
const container=document.querySelector(`.container`);


let generateword=(e)=>{
    let text=''
    let letters='ABCDEFghijkLMNOpqrstuVWxyz';

    for(let i=0;i<e;i++){
        let random=Math.trunc(Math.random()*letters.length-1);
        text+=letters[random]
    }
    return text;

}
// console.log(generateword(1))



btn.addEventListener(`click`,()=>{
    let numofword=input.value;
    // console.log(numofword)
    let para=document.createElement(`p`);

    let data=""

    for(let i=0;i<numofword;i++){
        let randomnumber=Math.trunc(Math.random()*15)
        data+=generateword(randomnumber)
        data+=" "
    }


    para.textContent=data;
    para.setAttribute('class',`paras`)
    container.append(para)

})