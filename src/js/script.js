import data from '../data/people.json' assert {type:"json"};

console.log(data);

/*const StudentObject = `
<div class="student">
${data.student[0].name}
</div>
`;

export{StudentObject};*/

const arrayOfStudent=[data.student[0].name,data.student[1].name,data.student[2].name,data.student[3].name,data.student[4].name];
console.log(arrayOfStudent);
document.getElementById("studenti").innerHTML=arrayOfStudent;


const arrayOfProfesor=[data.profesor[0].name,data.profesor[1].name,data.profesor[2].name];
console.log(arrayOfProfesor);
document.getElementById("profesori").innerHTML=arrayOfProfesor;


const arrayOfPredmet=[data.predmet[0].name,data.predmet[1].name,data.predmet[2].name,data.predmet[3].name,data.predmet[4].name];
console.log(arrayOfPredmet);
document.getElementById("predmeti").innerHTML=arrayOfPredmet;
