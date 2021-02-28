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

////////////////////render function////////////////////
  let liEl;
  // let renderdobj;
function render(renderdobj){
  let fieldsetEl =document.createElement('fieldset');
  divEl.appendchild('fieldsetEl');
  let h3El=document.createElement('h3');
  fieldsetEl.appendChild('h3El');
  h3El.textcontent=`${renderdobj.category}`;
  let ulEl =document.createElement('ul');
  fieldsetEl.appendChild(ulEl);
  liEl=document.createElement('li');
  ulEl.appendChild(liEl);
  liEl.textContent=`${renderdobj.name}`;

 liEl1=document.createElement('li');
  ulEl1.appendChild(liEl1);
  liEl1.textContent=`${renderdobj.contact}`;

  liEl2=document.createElement('li');
  ulEl2.appendChild(liEl2);
  liEl2.textContent=`${renderdobj.email}`;

  liEl3=document.createElement('li');
  ulEl3.appendChild(liEl3);
  liEl3.textContent=`${renderdobj.address}`;

  liEl4=document.createElement('li');
  ulEl4.appendChild(liEl4);
  liEl4.textContent=`${renderdobj.city}`;

  liEl5=document.createElement('li');
  ulEl5.appendChild(liEl5);
  liEl5.textContent=`${renderdobj.reach}`;

  liEl6=document.createElement('li');
  ulEl6.appendChild(liEl6);
  liEl6.textContent=`${renderdobj.discription}`;

  liEl7=document.createElement('li');
  ulEl7.appendChild(liEl7);
  liEl7.textContent=`${renderdobj.minCost}`;

  liEl8=document.createElement('li');
  ulEl8.appendChild(liEl8);
  liEl8.textContent=`${renderdobj.maxCost}`;
    


  }

  ////////////////showbutton//////////////
  function showButton(){
    getFromLocalStorage();
    console.log(Request.array);
    for(let i=0 ; i<Request.array.length ;i++){
      render(Request.array[i]);
    }
    bouttonEl2.removeEventListener('click',showButton);
  }
  bouttonEl2.addEventListener('click',showButton);
  


////////////////////event function /////////////////////

  function handileSubmit(event){
    event.preventDefault();
    //   console.log()
    new Request(name1.value,contact1.value,email1.value,address1.value,city1.value,reach1.value,category1.value,discription1.value,date1.value,mincost1.value,maxcost1.value);

    saveToLocalStorage();

    if(Request.array){bouttonEl2.hidden=false;}
  

     
   

  }
  submit1.addEventListener('click',handileSubmit );