
var students=["John","Jane"];
var mathGrades=[70,85];
var string=prompt ("Type in the student\'s name:");

for (let j=0;j< students.length; j++)[
    if (string===students [j]){
    var  ind=j;
    break;

    }
]
switch (true) {
    case (mathGrades[ind]<60):
        document.getElementById ('message').style.backgorundColor="red";
        break;
    case ((60<=mathGrades[ind])&&(mathGrades[ind]<70)):
        document.getElementById ('message').style.backgorundColor="yellow";
        break;
    case((70<=mathGrades[ind])&&(mathGrades[ind]<100)):
        document.getElementById ('message').style.backgorundColor="green";
        break;
    default:
        document.getElementById ('message').style.backgorundColor="blue";
        break;
}

document.getElementById('message').innerHTML=students[j]+"has reached"+mathGrades[ind]+"points in Math this season."