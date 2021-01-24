const sendBtn = document.querySelector('#sendBtn');
const Messagein = document.querySelector('#Messagein');
const Messageout = document.querySelector('#Messageout');

sendBtn.addEventListener('click',Sendmsg)

function Sendmsg () {
    let content = Messagein.value;
   // console.log(content);
   if(content === ''){
       alert('Please Enter A Valid Value');
   }
   else{
    Messageout.innerHTML = content;
    Messagein.value = '';
   }
   
}