const btn=document.getElementById(`btn`)
const tagcontainer=document.querySelector(`.tags`)
const input=document.getElementById(`name`);


btn.addEventListener("click",()=>{
    if(input.value===``){
        return null;
    }

    const tag=document.createElement(`div`)
    tag.setAttribute(`class`,`tag`)
    tag.textContent=`Hey Myself ${input.value}👋🏽`
    tagcontainer.append(tag)
})