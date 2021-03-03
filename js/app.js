'use strict';

if(window.document.title==='Maintenance Request | Home Maintenance Hub'){
  let name1 =document.getElementById('name1');
  let contact1 =document.getElementById('contact1');
  let email1 =document.getElementById('email1');
  let address1 =document.getElementById('address1');
  let city1 =document.getElementById('city1');
  let reach1 =document.getElementById('reach');
  let category =document.getElementById('category');
  let discription1 =document.getElementById('discription');
  let date1 =document.getElementById('date');
  let mincost1 =document.getElementById('mincost');
  let maxcost1 =document.getElementById('maxcost');
  let divEl=document.getElementById('x');

  let verifyIn=document.getElementById('verify');

  //////////////////global scope//////////////////////
  //let requestForm1 =document.getElementById('requestForm');




  ////////////////////////construct function ////////////////////////////////////////
  function MaintenanceRequest(name,contact,email,address,city,reach,category,discription,date,minCost,maxCost){
    this.name=name;
    this.contact=contact;
    this.email=email;
    this.address=address;
    this.city=city;
    this.reach=reach;
    this.category=category;//PrimaryKey
    this.discription=discription;
    this.date=date;
    this.minCost=minCost;
    this.maxCost=maxCost;
    MaintenanceRequest.array.push(this);
    saveToLocalStorage();
  }

  MaintenanceRequest.array=[];
  // console.log(MaintenanceRequest.array);

  ////////////////////render function (outter loop)////////////////////
  function render1(renderdobj){
    let fieldsetEl =document.createElement('fieldset');
    divEl.appendChild(fieldsetEl);



    let ulEl =document.createElement('ul');
    fieldsetEl.appendChild(ulEl);

    let liElx=document.createElement('li');// changed form h3 to li
    ulEl.appendChild(liElx);
    liElx.textContent=`Maintenance Request Gategory: ${renderdobj.category}`;
    //console.log(renderdobj.category);

    let liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`Homeowner Name: ${renderdobj.name}`;

    let liEl1=document.createElement('li');
    ulEl.appendChild(liEl1);
    liEl1.textContent=`Contact Number: ${renderdobj.contact}`;

    let liEl2=document.createElement('li');
    ulEl.appendChild(liEl2);
    liEl2.textContent=`Email: ${renderdobj.email}`;

    let liEl3=document.createElement('li');
    ulEl.appendChild(liEl3);
    liEl3.textContent=`Address: ${renderdobj.address}`;

    let liEl4=document.createElement('li');
    ulEl.appendChild(liEl4);
    liEl4.textContent=`City: ${renderdobj.city}`;

    let liEl5=document.createElement('li');
    ulEl.appendChild(liEl5);
    liEl5.textContent=` How did your hear about us: ${renderdobj.reach}`;

    let liEl6=document.createElement('li');
    ulEl.appendChild(liEl6);
    liEl6.textContent=`Maintenance Discription: ${renderdobj.discription}`;

    let liEl9=document.createElement('li');
    ulEl.appendChild(liEl9);
    liEl9.textContent=`Maintenance Appointment Date: ${renderdobj.date}`;

    let liEl7=document.createElement('li');
    ulEl.appendChild(liEl7);
    liEl7.textContent=`Minimum Cost: ${renderdobj.minCost}`;

    let liEl8=document.createElement('li');
    ulEl.appendChild(liEl8);
    liEl8.textContent=`Maximum Cost: ${renderdobj.maxCost}`;

  }

  /////////////rendering function (inner loop) Provider///////////
  function render (renderedObj){
    let fieldsetEl=document.createElement('fieldset');
    divEl.appendChild(fieldsetEl);

    let ulEl =document.createElement('ul');
    fieldsetEl.appendChild(ulEl);

    let liElc=document.createElement('li');//Change made here h3 to li
    ulEl.appendChild(liElc);
    liElc.textContent= `Service Provider Craft: ${renderedObj.craft}`;

    let liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`Service Provider Name: ${renderedObj.name}`;

    let liEl2=document.createElement('li');
    ulEl.appendChild(liEl2);
    liEl2.textContent=`Contact Number: ${renderedObj.contact}`;

    let liEl3=document.createElement('li');
    ulEl.appendChild(liEl3);
    liEl3.textContent=`Email: ${renderedObj.email}`;

    let liEl4=document.createElement('li');
    ulEl.appendChild(liEl4);
    liEl4.textContent=`Address: ${renderedObj.address}`;

    let liEl8=document.createElement('li');
    ulEl.appendChild(liEl8);
    liEl8.textContent=`City: ${renderedObj.city}`;

    let liEl5=document.createElement('li');
    ulEl.appendChild(liEl5);
    liEl5.textContent=`Contract & Payment Method: ${renderedObj.contract}`;

    let liEl6=document.createElement('li');
    ulEl.appendChild(liEl6);
    liEl6.textContent=`Available Days: ${renderedObj.days}`;

    let liEl7=document.createElement('li');
    ulEl.appendChild(liEl7);
    liEl7.textContent=`Available Shifts: ${renderedObj.shifts}`;
  }



  //////////////////save local storage function Request//////////////////////
  function saveToLocalStorage() {
    localStorage.setItem('RequestData', JSON.stringify(MaintenanceRequest.array));
  }

  ///////////////////get from local storage function Request//////////////////////
  function getFromLocalStorage(){
    let getdata=JSON.parse(localStorage.getItem('RequestData'));
    if(getdata){
      MaintenanceRequest.array=getdata;
    }
  }

  //////////Get form Local Storage Provider////////////
  let providerData=[];
  function getFormData () {
    providerData = JSON.parse(localStorage.getItem('formData'));
    // console.log('provider data: ' + providerData);
    // console.log('Get provider sata');
  }

  ////////////////////////////// showbutton /////////////////////////////////////
  let bouttonEl2=document.createElement('button');
  divEl.appendChild(bouttonEl2);
  bouttonEl2.textContent='SHOW YOUR INFO CLICK ME ';
  bouttonEl2.hidden=true;
  function showButton(){
    getFromLocalStorage();//request
    getFormData ();//provider
    // Nested loops for Complex rendering: Calling render from provider.js in the inner loop
    for(let i=0 ; i<MaintenanceRequest.array.length ;i++){
      render1(MaintenanceRequest.array[i]);//Render Maintenamce Reguests
      for(let j=0; j<providerData.length;j++){
        if(providerData[j].craft===MaintenanceRequest.array[i].category)// checking category===?craft
          render(providerData[j]);// Rendering Service Providers
      }
    }
    bouttonEl2.removeEventListener('click',showButton);
  }
  bouttonEl2.addEventListener('click',showButton);



  //////////////////////////////event function //////////////////////////////////
  let submit1 =document.getElementById('button');
  let num = '1234';
  function handileSubmit(event){
    event.preventDefault();
    if( num === verifyIn.value){
      alert('Successfully submited request');
      new MaintenanceRequest(name1.value,contact1.value,email1.value,address1.value,city1.value,reach1.value,category.value,discription1.value,date1.value,mincost1.value,maxcost1.value);
    //  console.log(category.value);
      if(MaintenanceRequest.array){
        bouttonEl2.hidden=false;
        submit1.removeEventListener('click',handileSubmit );
      }
    }else{
      alert('Please try again!');
    }
  }
  submit1.addEventListener('click',handileSubmit );
}

////////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
/////////////////////////////////////////
///////////provider/////////////////////

if(window.document.title==='Service Providers | Home Maintenance Hub'){
  let divEl = document.getElementById('x');
  let uname=document.getElementById('name1');
  let contact=document.getElementById('contact1');
  let emailEl=document.getElementById('email1');
  let addressEl=document.getElementById('address1');
  let selectCity=document.getElementById('city1');
  let craftEl=document.getElementById('craft1');
  let contractEl=document.getElementById('contract');
  let buttonEl=document.getElementById('button');
  let buttonEl2=document.createElement('button');
  // buttonEl2.style('z-index',2)
  divEl.appendChild(buttonEl2);//Holy error
  buttonEl2.textContent = 'to show offers click here';
  buttonEl2.hidden=true;
  let verify=document.getElementById('verify');

  ///////////////////
  
  let arrOfObjects1 =[];
  let availableDayes=[];
  let availableShift=[];

  function ProviderServiceForm (name,contact,email,address,city,craft,contract){

    this.name=name;
    this.contact=contact;
    this.email=email;
    this.address=address;
    this.city=city;
    this.craft=craft;
    this.contract=contract;
    this.days=days();
    this.shifts=shifts();
    arrOfObjects1.push(this);
console.log('constr' +this.craft);
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
    // console.log(naji);
    if( inputV === verify.value){
    //     alert('your form submit ');
    //     new Request(name1.value,contact1.value,email1.value,address1.value,city1.value,reach1.value,category1.value,discription1.value,date1.value,mincost1.value,maxcost1.value);
      new ProviderServiceForm (uname.value,contact.value,emailEl.value,addressEl.value,selectCity.value,craftEl.value,contractEl.value);
      confirm ('Thank you,  we have received your information and it is being processed');

      if(arrOfObjects1){buttonEl2.hidden=false;}
      buttonEl.removeEventListener('click',submitButton);
    }else{
      alert('please try again ');
    }
  }

  buttonEl.addEventListener('click',submitButton);



  function render (renderedObj){
    let fieldsetEl=document.createElement('fieldset');
    divEl.appendChild(fieldsetEl);

    let ulEl =document.createElement('ul');
    fieldsetEl.appendChild(ulEl);

    let liEln=document.createElement('li');
    ulEl.appendChild(liEln);
    liEln.textContent= `Service Provider Craft: ${renderedObj.craft}`;

    let liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`Service Provider Name: ${renderedObj.name}`;

    let liEl2=document.createElement('li');
    ulEl.appendChild(liEl2);
    liEl2.textContent=`Service Provider Contact Number: ${renderedObj.contact}`;

    let liEl3=document.createElement('li');
    ulEl.appendChild(liEl3);
    liEl3.textContent=`Service Provider Email: ${renderedObj.email}`;

    let liEl4=document.createElement('li');
    ulEl.appendChild(liEl4);
    liEl4.textContent=`Service Provider City: ${renderedObj.city}`;

    let liEl5=document.createElement('li');
    ulEl.appendChild(liEl5);
    liEl5.textContent=`Service Provider Contract${renderedObj.contract}`;

    let liEl6=document.createElement('li');
    ulEl.appendChild(liEl6);
    //here is bug !!!!
    liEl6.textContent=` Service Provider Day Availability: ${availableDayes}`;

    let liEl7=document.createElement('li');
    ulEl.appendChild(liEl7);
    liEl7.textContent=`Service Provider Shift Availability: ${availableShift}`;
  }

   ////////////////////render function (outter loop)////////////////////
   function render1(renderdobj){
    let fieldsetEl =document.createElement('fieldset');
    divEl.appendChild(fieldsetEl);

    let ulEl =document.createElement('ul');
    fieldsetEl.appendChild(ulEl);
    
    let liElm=document.createElement('li');
    ulEl.appendChild(liElm);
    liElm.textContent=`Maintenance Request Gategory: ${renderdobj.category}`;

    let liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`Homeowner Name: ${renderdobj.name}`;

    let liEl1=document.createElement('li');
    ulEl.appendChild(liEl1);
    liEl1.textContent=`Contact Number: ${renderdobj.contact}`;

    let liEl2=document.createElement('li');
    ulEl.appendChild(liEl2);
    liEl2.textContent=`Email: ${renderdobj.email}`;

    let liEl3=document.createElement('li');
    ulEl.appendChild(liEl3);
    liEl3.textContent=`Address: ${renderdobj.address}`;

    let liEl4=document.createElement('li');
    ulEl.appendChild(liEl4);
    liEl4.textContent=`City: ${renderdobj.city}`;

    let liEl5=document.createElement('li');
    ulEl.appendChild(liEl5);
    liEl5.textContent=`How did your hear about us: ${renderdobj.reach}`;

    let liEl6=document.createElement('li');
    ulEl.appendChild(liEl6);
    liEl6.textContent=`Maintenance Discription: ${renderdobj.discription}`;

    let liEl9=document.createElement('li');
    ulEl.appendChild(liEl9);
    liEl9.textContent=`Maintenance Appointment Date: ${renderdobj.date}`;

    let liEl7=document.createElement('li');
    ulEl.appendChild(liEl7);
    liEl7.textContent=`Minimum Cost: ${renderdobj.minCost}`;

    let liEl8=document.createElement('li');
    ulEl.appendChild(liEl8);
    liEl8.textContent=`Maximum Cost: ${renderdobj.maxCost}`;

  }


  /////////////Show Button Clicking/////////
  function showButton(event){
    event.preventDefault();
    getFromLocalStorage();//request
    getFormData ();//provider
    // Nested loops for Complex rendering: Calling render request in the inner loop
    for(let i=0 ; i<arrOfObjects1.length ;i++){
      render(arrOfObjects1[i]);//Render Provider

      for(let j=0; j<getdata.length;j++){
        console.log('for :'+ arrOfObjects1[i].craft + ' n ' +getdata[j].category);///////
        if(arrOfObjects1[i].craft===getdata[j].category)// checking category===?craft
          render1(getdata[j]);// Rendering Request
      }
    }
    buttonEl2.removeEventListener('click',showButton);
  }

  /////////////B2 Event Listener////////////
  buttonEl2.addEventListener('click',showButton);

  //////////Get form Local Storage provider////////////
  function getFormData () {
    arrOfObjects1 = JSON.parse(localStorage.getItem('formData'));
  }

    ///////////////////get from local storage function Request//////////////////////
    let getdata;
    function getFromLocalStorage(){
      getdata=JSON.parse(localStorage.getItem('RequestData'));
    }

}



