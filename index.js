function receivesAFunction(callback) {
    callback();
    
}

function returnsANamedFunction() {
    var callback = function() {
        console.log("callback called");
    }
    return callback;
}

function returnsAnAnonymousFunction() {
    return function() {
        return 'anonymous';
}
}