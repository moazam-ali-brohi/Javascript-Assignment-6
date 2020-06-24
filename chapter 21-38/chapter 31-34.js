//Chapter 31-34

//task-1
var time = new Date();
document.write(time)

//---------


//Task-2
var months=["June"]
alert("Current month: "+ months)

//----------


//Task-3
var time= new Date();
var time=time.toDateString();
var time=time.split(" ")
document.write("Today is "+time[0])

//-------


//Task-4
var x= new Date();
var x=x.getDay();
if(x==5, 6){alert("Its Fun Day Today")}

//---------


//Task-5
var n= new Date();
var nn=n.getDate();
if(nn<=15){document.write("First fifteen days of month")}else if(nn>15){document.write("Last fifteen days of month")}

//---------


//Task-6