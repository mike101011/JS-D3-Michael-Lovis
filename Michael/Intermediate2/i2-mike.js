for (let j = 0; j < 100; j++) {
    switch (true) {
        case ((j+1)%15===0):
            document.write("FizzBuzz <br>");
            break;
        case ((j+1)%3===0):
            document.write("Fizz <br>");
            break;
        case ((j+1)%5===0):
            document.write("Buzz <br>");
            break;
        default:
            document.write((j+1)+"<br>");
            break;
    }
    
}