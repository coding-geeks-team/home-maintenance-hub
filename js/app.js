'use strict';
//////////////////global scope//////////////////////
let requestForm1 =document.getElementById('requestForm');
let name1 =document.getElementById('name1');
let contact1 =document.getElementById('contact1');
let email1 =document.getElementById('email1');
let address1 =document.getElementById('address1');
let city1 =document.getElementById('city1');
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
let verifyIn=document.getElementById('verify1');



////////////////////////construct function ////////////////////////////////////////
function MaintenanceRequest(name,contact,email,address,city,reach,category,discription,date,minCost,maxCost){
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
  MaintenanceRequest.array.push(this);
  saveToLocalStorage();
}

MaintenanceRequest.array=[];
// console.log(MaintenanceRequest.array);


///////////////////save local storage function//////////////////////
function saveToLocalStorage() {
  localStorage.setItem('RequestData', JSON.stringify(MaintenanceRequest.array));
}

///////////////////get from local storage function//////////////////////
function getFromLocalStorage(){
  let getdata=JSON.parse(localStorage.getItem('RequestData'));
  if(getdata){
    MaintenanceRequest.array=getdata;
  }

}
getFromLocalStorage();

////////////////////render function (outter loop)////////////////////
function render1(renderdobj){
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

/////////////rendering function (inner loop)///////////
function render (renderedObj){
  let fieldsetEl=document.createElement('fieldset');
  divEl.appendChild(fieldsetEl);
  let h3El=document.createElement('h3');
  fieldsetEl.appendChild(h3El);
  h3El.textcontent= ` ${renderedObj.craft}  `;

  let ulEl =document.createElement('ul');
  fieldsetEl.appendChild(ulEl);
  let liEl=document.createElement('li');
  ulEl.appendChild(liEl);
  liEl.textContent=`${renderedObj.name}`;

  let liEl2=document.createElement('li');
  ulEl.appendChild(liEl2);
  liEl2.textContent=`${renderedObj.contact}`;

  let liEl3=document.createElement('li');
  ulEl.appendChild(liEl3);
  liEl3.textContent=`${renderedObj.email}`;

  let liEl4=document.createElement('li');
  ulEl.appendChild(liEl4);
  liEl4.textContent=`${renderedObj.city}`;

  let liEl5=document.createElement('li');
  ulEl.appendChild(liEl5);
  liEl5.textContent=`${renderedObj.contract}`;

  let liEl6=document.createElement('li');
  ulEl.appendChild(liEl6);
  //here is bug !!!!
  liEl6.textContent=`${availableDayes}`;

  let liEl7=document.createElement('li');
  ulEl.appendChild(liEl7);
  liEl7.textContent=`${availableShift}`;
}


////////////////////////////// showbutton /////////////////////////////////////
let arrOfObject =[];
function setFormData(){
  localStorage.setItem('formData',JSON.stringify(arrOfObject));
}

let getData=[];
function getFormData () {
  getData = JSON.parse(localStorage.getItem('formData'));
  if (getData)
  { arrOfObject= getData;}
}
getFormData();

function showButton(){
  // Nested loops for Complex rendering: Calling render from provider.js in the inner loop
  for(let i=0 ; i<MaintenanceRequest.array.length ;i++){
    render1(MaintenanceRequest.array[i]);//Render Maintenamce Reguests
    for(let j=0; j<arrOfObject.length;j++){
      if(arrOfObject[j].craft===MaintenanceRequest.array[i])// checking category===?craft
        render(arrOfObject[j]);// Rendering Service Providers
    }
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

    new MaintenanceRequest(name1.value,contact1.value,email1.value,address1.value,city1.value,reach1.value,category1.value,discription1.value,date1.value,mincost1.value,maxcost1.value);


    if(MaintenanceRequest.array){bouttonEl2.hidden=false;}

  }else{
    alert(' Please try again ');


  }


}
submit1.addEventListener('click',handileSubmit );




