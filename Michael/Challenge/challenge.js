var students=["John","Jane","Albert", "Dora"];
var mathGrades=[70,100,55,65];
var string=prompt("Type in the student\'s name: ");
for (let j = 0; j < students.length; j++) {
    if (string===students[j]){
        var ind=j;
        break;
    }
}
switch (true) {
        case (mathGrades[ind]<60):
            document.getElementById('message').style.backgroundColor="red";
            break;
        case ((mathGrades[ind]<70)):
            document.getElementById('message').style.backgroundColor="yellow";
            break;
        case((mathGrades[ind]<100)):
            document.getElementById('message').style.backgroundColor="green";
            break;
        default:
            document.getElementById('message').style.backgroundColor="blue";
    }
document.getElementById('message').innerHTML=students[ind]+" has reached "+mathGrades[ind]+" points in Math this season."