const btn=document.getElementById("btn");
const bodyc=document.body
const zodiac=document.getElementById("zodiac")


btn.addEventListener("click",()=>{

    switch (zodiac.value) {
        case `aries`:
            bodyc.style.backgroundColor="red"
            break;
            case `tarus`:
                bodyc.style.backgroundColor=`green`;
                break;
            case `gemini`:
                bodyc.style.backgroundColor=`yellow`;
                break;
            case `cancer`:
                bodyc.style.backgroundColor=`silver`;
                break;
            case `leo`:
                bodyc.style.backgroundColor=`gold`;
                break;
            case `virgo`:
                bodyc.style.backgroundColor=`brown`;
                break;
            case `libra`:
                bodyc.style.backgroundColor=`pink`;
                break;
            case `scorpio`:
                bodyc.style.backgroundColor=`black`;
                break;
            case `sagittarius`:
                bodyc.style.backgroundColor=`purple`;
                break;
            case `aquarius`:
                bodyc.style.backgroundColor=`blue`;
                break;
            case `capricorn`:
                bodyc.style.backgroundColor=`grey`;
                break;
            case `pisces`:
                bodyc.style.backgroundColor=`lightgreen`;
                break;
        default:
            bodyc.style.backgroundColor=`white`
            break;
    }

})