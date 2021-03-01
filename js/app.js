'use strict';
//////////////////global scope////////////////////// 
let requestForm1 =document.getElementById('requestForm');
let name1 =document.getElementById('name');
let contact1 =document.getElementById('contact');
let email1 =document.getElementById('email');
let address1 =document.getElementById('address');
let city1 =document.getElementById('city');
let reach1 =document.getElementById('reach');
let category1 =document.getElementById('category');
let discription1 =document.getElementById('discription');
let date1 =document.getElementById('date');
let mincost1 =document.getElementById('mincost');
let maxcost1 =document.getElementById('maxcost');
let submit1 =document.getElementById('submit');
let bouttonEl2=document.createElement('button');
let divEl=document.getElementById('ul');
divEl.appendChild(bouttonEl2);
bouttonEl2.textContent='SHOW YOUR INFO CLICK ME ';
bouttonEl2.hidden=true;
let verifyIn=document.getElementById('verify');



////////////////////////construct function ////////////////////////////////////////
function Request(name,contact,email,address,city,reach,category,discription,date,minCost,maxCost){
    this.name=name;
    this.contact=contact;
    this.email=email;
    this.address=address;
    this.city=city;
    this.reach=reach;
    this.category=category;
    this.discription=discription;
    this.date=date;
    this.minCost=minCost;
    this.maxCost=maxCost;
    Request.array.push(this);
    saveToLocalStorage();
}

Request.array=[];
// console.log(Request.array);


///////////////////save local storage function//////////////////////
function saveToLocalStorage() {
    localStorage.setItem('RequestData', JSON.stringify(Request.array));
  };

///////////////////get from local storage function//////////////////////
   function getFromLocalStorage(){
    let getdata=JSON.parse(localStorage.getItem('RequestData'));
    if(getdata){
      Request.array=getdata;
    }

   }
   getFromLocalStorage();

////////////////////render function////////////////////
function render(renderdobj){
  let fieldsetEl =document.createElement('fieldset');
  divEl.appendChild(fieldsetEl);

  let h3El=document.createElement('h3');
  fieldsetEl.appendChild(h3El);
  h3El.textcontent=`${renderdobj.category}`;

  let ulEl =document.createElement('ul');
  fieldsetEl.appendChild(ulEl);

  let liEl=document.createElement('li');
  ulEl.appendChild(liEl);
  liEl.textContent=`${renderdobj.name}`;

 let liEl1=document.createElement('li');
  ulEl.appendChild(liEl1);
  liEl1.textContent=`${renderdobj.contact}`;

  let liEl2=document.createElement('li');
  ulEl.appendChild(liEl2);
  liEl2.textContent=`${renderdobj.email}`;

  let liEl3=document.createElement('li');
  ulEl.appendChild(liEl3);
  liEl3.textContent=`${renderdobj.address}`;

  let liEl4=document.createElement('li');
  ulEl.appendChild(liEl4);
  liEl4.textContent=`${renderdobj.city}`;

  let liEl5=document.createElement('li');
  ulEl.appendChild(liEl5);
  liEl5.textContent=`${renderdobj.reach}`;

  let liEl6=document.createElement('li');
  ulEl.appendChild(liEl6);
  liEl6.textContent=`${renderdobj.discription}`;

  let liEl7=document.createElement('li');
  ulEl.appendChild(liEl7);
  liEl7.textContent=`${renderdobj.minCost}`;

  let liEl8=document.createElement('li');
  ulEl.appendChild(liEl8);
  liEl8.textContent=`${renderdobj.maxCost}`;

  }

  ////////////////////////////// showbutton /////////////////////////////////////

  function showButton(){
    
    // console.log(Request.array);
    for(let i=0 ; i<Request.array.length ;i++){
      render(Request.array[i]);
    }
    bouttonEl2.removeEventListener('click',showButton);
  }
  bouttonEl2.addEventListener('click',showButton);
  


//////////////////////////////event function //////////////////////////////////

let num = '1234';
function handileSubmit(event){
  event.preventDefault();

    
      if( num === verifyIn.value){
        alert(' Successfully submit ');
        
        new Request(name1.value,contact1.value,email1.value,address1.value,city1.value,reach1.value,category1.value,discription1.value,date1.value,mincost1.value,maxcost1.value);
    
    
        if(Request.array){bouttonEl2.hidden=false;}
      
      }else{
        alert(' Please try again ');


      }
    
      
    }
    submit1.addEventListener('click',handileSubmit );
    
    
    
    
    