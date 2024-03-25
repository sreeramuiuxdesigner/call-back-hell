function countdown(num, callback) {
    if (num > 0) {
        document.getElementById('callBackHell').innerText = num;
        setTimeout(function() {
            countdown(num - 1, callback);
        }, 1000);
    } else {
        document.getElementById('callBackHell').innerText = 'Happy Independence Day';
        setTimeout(callback, 1000); 
    }
}

countdown(10, function() {
});
