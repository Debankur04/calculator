let display= document.querySelector("input")
let button= document.querySelectorAll("button");
let buttonarray= Array.from(button);
let string= ''

buttonarray.forEach(function(btn){
   btn.addEventListener('click',(event)=>{
        if (event.target.innerText== 'DE') {
            string= string.substring(0, string.length -1)
            display.value= string
        }else if(event.target.innerText== 'AC'){
            string= ''
            display.value = string
        }else if(event.target.innerText== '='){
            string= eval(string)
            display.value= string
        }else{
            string += event.target.innerText
            display.value= string
        }
        console.log(event.target.innerText)
   })
})
