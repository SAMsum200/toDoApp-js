

document.getElementById("sub").addEventListener("click",function(){
     

    //create li inside div#List
    var myElement=document.createElement('li');
    myElement.className='li'
    var output=document.getElementById('List');
    output.appendChild(myElement);//fin.appendChild(axno)

    //Create a <hr> after li
    myElement.insertAdjacentHTML('afterend','<hr>');
    var myHr=document.getElementsByTagName('hr');

    //create checkBox inside li
    var myCheckBox=document.createElement('input');
    myCheckBox.type='checkbox';
    myCheckBox.className='checkbox'
    myCheckBox.id='check'
    myElement.appendChild(myCheckBox);

    //create span inside li
    var myspan=document.createElement('span');
    myElement.appendChild(myspan);
    
    
    //user's inputs
    var input=document.getElementById('input').value;
    myspan.innerHTML=input ;
    //create remove btn inside li    
    var myBtn=document.createElement('i');
    myBtn.type="submit";
    myBtn.className="fas fa-trash fa-lg";
    myBtn.value='Remove'; 
    myElement.appendChild(myBtn);

   
    //checkBox class 
    myCheckBox.addEventListener("click",function(){
        myspan.classList.toggle('done');
        
    })
    /*/Remove the hr by clicking on remove btn  ERROR///'index.js:45 Uncaught TypeError: myHr.remove is not a function
    at HTMLInputElement.<anonymous>*/
    myBtn.addEventListener('click',function(){
        myHr.remove();
    })

    myBtn.addEventListener('click',function(){
        myElement.remove();
        
    })
    var clearLis=document.getElementById("Clear");
    clearLis.addEventListener("click",function(){
        output.remove();
        
    });
});
document.getElementById('input').onfocus=function(){

    if(this.placeholder==="Add an item"){
        this.placeholder='';
    }
    
}
document.getElementById('input').onblur=function(){
if(this.placeholder===''){
        this.placeholder="Add an item";
    }
}

//days
var Days=[ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
var myDate=new Date();
var day=myDate.getDay();
//month
var Months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
var month=myDate.getMonth();
//date
var date=myDate.getDate()
//hours
var H=myDate.getHours()
//Minutes
var M=myDate.getMinutes();
var All=Days[day]+" "+date+" "+Months[month]+" "+H+":"+M;
var dateElement=document.getElementById('date');
dateElement.innerHTML=All;