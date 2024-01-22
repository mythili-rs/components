//promise:
// .then(console.log(meassage))-your code is sucessfully executed
// .catch(console.log(meassage))-your code is not sucessfully executed

function display(s) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(s);
            resolve('completed');
            //reject('function incomplete');
        }, 2000);
    });
}

display('hey').then(function(status) {
    if (status === 'completed')
     { return display('hi'); }
}).then(function(status) {
    if (status === 'completed') {
        return display('hello');
    }
});