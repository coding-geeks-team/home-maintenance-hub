
// let formEl=document.getElementById('providerForm');
if(window.document.title==='Maintenance Request | Home Maintenance Hub'){
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
let submit1 =document.getElementById('button');
let bouttonEl2=document.createElement('button');
let divEl=document.getElementById('x');
divEl.appendChild(bouttonEl2);
bouttonEl2.textContent='SHOW YOUR INFO CLICK ME ';
bouttonEl2.hidden=true;
let verifyIn=document.getElementById('verify');

}
if(window.document.title==='Service Providers | Home Maintenance Hub'){
  let divEld = document.getElementById('x');
let uname=document.getElementById('name1');
let contact=document.getElementById('contact1');
let emailEl=document.getElementById('email1');
let selectCity=document.getElementById('city1');
let craftEl=document.getElementById('craft1');
let contractEl=document.getElementById('contract');
let buttonEl=document.getElementById('button');
let buttonEl2=document.createElement('button');
divEld.appendChild(buttonEl2);//Holy error
buttonEl2.textContent = 'to show offers click here';
buttonEl2.hidden=true;
let verify=document.getElementById('verify');
}

let arrOfObjects1 =[];
let availableDayes=[];
let availableShift=[];

function ProviderServiceForm (name,contact,email,city,craft,contract){

  this.uname=name;
  this.contact=contact;
  this.email=email;
  this.city=city;
  this.craft=craft;
  this.contract=contract;
  this.days=days();
  this.shifts=shifts();
  arrOfObjects1.push(this);

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
  localStorage.setItem('formData',JSON.stringify(arrOfObjects1));

}




let inputV='1234';

function submitButton (event){

  event.preventDefault();
  let naji=craftEl.value;
  console.log(naji);
  if( inputV === verify.value){
    //     alert('your form submit ');
    //     new Request(name1.value,contact1.value,email1.value,address1.value,city1.value,reach1.value,category1.value,discription1.value,date1.value,mincost1.value,maxcost1.value);
    new ProviderServiceForm (uname.value,contact.value,emailEl.value,selectCity.value,craftEl.value,contractEl.value);
    confirm ('Thank you,  we have received your information and it is being processed');

    if(arrOfObjects1){buttonEl2.hidden=false;}
  }else{
    alert('please try again ');
  }
}

buttonEl.addEventListener('click',submitButton);



function render (renderedObj){
  let fieldsetEl=document.createElement('fieldset');
  divEld.appendChild(fieldsetEl);
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

/////////////Show Button Clicking/////////
function showButton(event){
  event.preventDefault();
  for (let i=0 ; i<arrOfObjects1.length;i++){
    render(arrOfObjects1[i]);
  }
  buttonEl2.removeEventListener('click',showButton);
}

/////////////B2 Event Listener////////////
buttonEl2.addEventListener('click',showButton);

//////////Get form Local Storage////////////
let getData1=[];
function getFormData () {
  getData1 = JSON.parse(localStorage.getItem('formData'));
  if (getData1)
  { arrOfObjects1= getData1;}
}
getFormData();
