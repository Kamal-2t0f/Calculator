const input=document.getElementById("num-input");
const result=document.getElementById("result");

function clickbutton(el)
{
    console.log(el.innerText);
    const exp=`${input.value}${el.innerText}`;
    input.value=exp;
    if(["+","-","*","/"].includes(el.innerText)) return;
    result.value=eval(exp);
}
function clearDisp()
{
    input.value="";
    result.value="";
}