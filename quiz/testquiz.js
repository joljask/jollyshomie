function evalGroup()
{
var states = document.radioForm.states.value;
var capital = document.radioForm.capital.value;
var reva = document.radioForm.reva.value;
var  sem = document.radioForm.sem.value;
var ch = document.radioForm.ch.value;
marks = 0;

if(states == 29)
{
marks++;
}

if(capital =="Delhi")
{
    marks++;
}

if(reva =="Bangalore")
{
    marks++;
}

if(sem == 2)
{
    marks++;
}

if(ch=="sr")
{
    marks++;
}

alert("Score = "+ marks + "/5");
}
