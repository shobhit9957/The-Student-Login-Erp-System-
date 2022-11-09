function time(){
    let time = new Date().toString();
    let correction = time.lastIndexOf(':') + 3
    document.getElementById('time').innerHTML = 'user: [name] /' + time.substring(0,correction);
}
time();
