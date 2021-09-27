starFunction=(num)=>{
    var string=""
    for (let j = 0; j < num; j++) {
        string=string+"*";
        document.write(string+"<br>");
    }
}
starFunction(6);