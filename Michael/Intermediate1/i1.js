var names=["Martin","Thomas","Klaus", "Maria","David"];
var points=[76,85,65,93,81];
grade=(i)=>{
    let p=points[i];
    switch (true) {
        case (p<60):
            document.write(names[i]+" has an F <br>");
            break;
        case ((60<=p)&&(p<70)):
            document.write(names[i]+" has a D <br>");
            break;
        case((70<=p)&&(p<80)):
            document.write(names[i]+" has a C <br>");
            break;
        case ((80<=p)&&(p<90)):
            document.write(names[i]+" has a B <br>");
            break;
        default:
            document.write(names[i]+" has an A <br>");
            break;
    }
}
for (let i = 0; i < names.length; i++) {
    grade(i);
}
