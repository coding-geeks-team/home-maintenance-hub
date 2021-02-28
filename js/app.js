'use strict';
let requestForm =document.getElementById('requestForm');


function Request(name,contactNumber,email,addrress,city,reach,serviceCategory,discription,date,minCost,maxCost){
    this.name=name;
    this.contactNumber=contactNumber;
    this.email=email;
    this.addrress=addrress;
    this.city=city;
    this.reach=reach;
    this.serviceCategory=serviceCategory;
    this.discription=discription;
    this.date=date;
    this.minCost=minCost;
    this.maxCost=maxCost;
    Request.array.push(this);
}
Request.array=[];


Request.prototype.saveToLocalStorage = function () {
    localStorage.setItem('Request', JSON.stringify(array));
  };

  function handileSubmit(e){
      e.preventDefault();
    //   console.log()
    


  }