// let formEl=document.getElementById('providerForm');
let divEl = document.getElementById('showdata');
let username=document.getElementById('name');
let contactnumber=document.getElementById('contact');
let emailEl=document.getElementById('email');
let selectCity=document.getElementById('city');
let craftEl=document.getElementById('craft');
let contractEl=document.getElementById('contract');
let buttonEl=document.getElementById('button');
let buttonEl2=document.createElement('button');
divEl.appendChild(buttonEl2);
buttonEl2.textContent = 'to show offers click here';
buttonEl2.hidden=true;

let arrOfObject =[];
let availableDayes=[];
let availableShift=[];

function ProviderServiceForm (name,contact,email,city,craft,contract){

  this.name=name;
  this.contact=contact;
  this.email=email;
  this.city=city;
  this.craft=craft;
  this.contract=contract;
  this.days=days();
  this.shifts=shifts();
  arrOfObject.push(this);

  setFormData();

}


let checkBoxEl1= document.getElementById('sunday');
let checkBoxEl2= document.getElementById('monday');
let checkBoxEl3= document.getElementById('tuesday');
let checkBoxEl4= document.getElementById('wednesday');
let checkBoxEl5= document.getElementById('thursday');
let checkBoxEl6= document.getElementById('friday');
let checkBoxEl7= document.getElementById('saturday');



function days(){
  if(checkBoxEl1.checked){availableDayes.push(checkBoxEl1.value);}
  if(checkBoxEl2.checked){availableDayes.push(checkBoxEl2.value);}
  if(checkBoxEl3.checked){availableDayes.push(checkBoxEl3.value);}
  if(checkBoxEl4.checked){availableDayes.push(checkBoxEl4.value);}
  if(checkBoxEl5.checked){availableDayes.push(checkBoxEl5.value);}
  if(checkBoxEl6.checked){availableDayes.push(checkBoxEl6.value);}
  if(checkBoxEl7.checked){availableDayes.push(checkBoxEl7.value);}
  return availableDayes ;

}


let shift1=document.getElementById('shiftA');
let shift2=document.getElementById('shiftB');
let shift3=document.getElementById('shiftC');

function shifts(){
  if(shift1.checked){availableShift.push(shift1.name);}
  if(shift2.checked){availableShift.push(shift2.name);}
  if(shift3.checked){availableShift.push(shift3.name);}
  return availableShift;

}


function setFormData(){
  localStorage.setItem('formData',JSON.stringify(arrOfObject));

}






function submitButton (event){


  event.preventDefault();

  new ProviderServiceForm (username.value,contactnumber.value,emailEl.value,selectCity.value,craftEl.value,contractEl.value);

  confirm ('Thank you,  we have received your information and it is being processed');
  // setFormData();

  if (arrOfObject){ buttonEl2.hidden = false; }

}

buttonEl.addEventListener('click',submitButton);



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


function showButton(event)
{
  event.preventDefault();

  for (let i=0 ; i<arrOfObject.length;i++){

    render(arrOfObject[i]);}
}


buttonEl2.addEventListener('click',showButton);


let getData=[];
function getFormData () {


  getData = JSON.parse(localStorage.getItem('formData'));
  if (getData)
  { arrOfObject= getData;}

}
getFormData();

