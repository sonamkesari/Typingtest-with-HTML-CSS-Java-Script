
const listoftext= ['That boy is not sleeping.','I am not going to entertain you any more.','Hello How are you doing?',
'He is going to Lucknow for some special work.',
'I am going to teach Java Script soon.',
'These fruits are so sweets.',
'You are looking so good.'];

const msg= document.getElementById('msg');
const typetext= document.getElementById('test');
const btn= document.getElementById('btn');

let starttime, endtime;

function playgame()
{
    let text= Math.floor(Math.random()* listoftext.length);
    msg.innerHTML=listoftext[text];
    starttime= new Date();
    starttime=starttime.getTime();
    btn.innerText= 'Done'; 
}
function endgame()
    {
        endtime= new Date();
    endtime=endtime.getTime();
    let totaltime= ((endtime-starttime)/1000);
   let typedstring= typetext.value;
        let wcount= wordcount(typedstring);
        let speed= Math.round((wcount/totaltime)*60);
        let finalmsg= " You have typed at "+ speed +' words per minute';
        finalmsg += comparewords(msg.innerText,typedstring);
        msg.innerText=finalmsg;
    }

    function comparewords(str1, str2){
        let word1= str1.split(' ');
        let word2= str2.split(' ');
        let count=0;

        word1.forEach( function(item,index){
            if(item== word2[index])
            {
                count++;
            }

        })

        let wrongword= word1.length-count;
        return (count + " correct out of "+ word1.length + 'and the total errors are '+ wrongword+'.');
    }

function wordcount(sentence){
     let res= sentence.split(' ').length;
     return res;

}

btn.addEventListener('click', function(){
    
    if(this.innerText== 'Start Typing')
    {
        typetext.disabled =false;
        playgame();
       
    }
    else if(this.innerText== 'Done')
    {
        typetext.disabled =true;
        btn.innerText='Stat Typing';
        endgame();

        
       

    }


})
btnreset.addEventListener('click', function(){

    let txtareaid= document.getElementById('test');
    txtareaid.value="";
})
