//callback:
function mythili(welcomeMessage,callback){
    setTimeout(function(){
        console.log("welcomeMessage")
        callback();
    },2000)  
}
function menmitha()
{
    console.log("Hi")
}
mythili("Hello mythili \nWelcome to SVMHSS",menmitha)

/*function ramusomu(name,callback){
    setTimeout(function(){
    console.log(name)
    callback();///we canuse any other functionname
    },2000)
}
function miniAni(){
    console.log("odi poiru thambi vanthudatha")
}
ramusomu("hello ramu and somu",miniAni)*/
// Synchronous callback
// function doSomething(callback) {
//     console.log("Doing something...");
//     callback(); // Execute the callback function
//   }
  
//   function callbackFunction() {
//     console.log("Callback function executed!");
//   }
  
  //doSomething(callbackFunction);
  
  // Asynchronous callback (using setTimeout as an example)
  function doAsyncTask(callback) {
    console.log("Starting asynchronous task...");
    setTimeout(function () {
      console.log("Asynchronous task completed!");
      callback(); // Execute the callback function
    }, 2000);
  }
  
  function asyncCallback() {
    console.log("Callback function executed after async task!");
  }
  
  doAsyncTask(asyncCallback);

function displayHello() {
    console.log('hello');
}


setInterval(displayHello, 2000);