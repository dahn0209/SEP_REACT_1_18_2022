const arr = ["hello", 2, 3];
const arr=[2,4,6];
//map, filter, reduce, some, every

//////forEach/////////
Array.prototype.forEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};


///map/////
Array.prototype.map = function (cb) {
  let resultArr=[]
  for (let i = 0; i < this.length; i++) {
    let eachEl=this[i]
    resultArr.push( cb(eachEl, i, resultArr));
  }
  return resultArr;
};

///filter//////
Array.prototype.filter = function (cb) {

  let resultArr=[]
  for (let i = 0; i < this.length; i++) {
    let eachEl=this[i]

    if(cb(eachEl, i, this)){
        resultArr.push(eachEl)
    }
  }
  return resultArr;
};

////////reduce/////
Array.prototype.reduce = function (cb,val=0) {
  let result=0;
  for (let i = 0; i < this.length; i++) {
    let eachEl=this[i];
    result+=cb(eachEl,i,this)
  }
  return result
}

            /////some//////
Array.prototype.some = function (cb) {

  for(let i=0;i<this.length;i++){
    let eachEl=this[i];
    if(cb(eachEl,i,this)===true){
      return true
    }
  }
  return false
};

/////every////////
Array.prototype.every = function (cb) {
  let value=false
  for(let i=0;i<this.length;i++){
    let eachEl=this[i];
    if(cb(eachEl,i,this)===true){
      value=true;
    }
  }
  return value
};

