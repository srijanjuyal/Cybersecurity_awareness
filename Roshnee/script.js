function inp1(){
    //let inpu=document.getElementById("a2");
    let opt=document.getElementById("a22");
        opt.style.backgroundColor = 'green';
}
function inp2(){
    //let inpu=document.getElementById("a2");
    let opt=document.getElementById("b44");
        opt.style.backgroundColor = 'green';
}
function inp3(){
    //let inpu=document.getElementById("a2");
    let opt=document.getElementById("c22");
        opt.style.backgroundColor = 'green';
}
function inp4(){
    //let inpu=document.getElementById("a2");
    let opt=document.getElementById("d44");
        opt.style.backgroundColor = 'green';
}
function inp5(){
    //let inpu=document.getElementById("a2");
    let opt=document.getElementById("e11");
        opt.style.backgroundColor = 'green';
}
function inp6(){
    //let inpu=document.getElementById("a2");
    let opt=document.getElementById("f11");
        opt.style.backgroundColor = 'green';
}
function inp7(){
    //let inpu=document.getElementById("a2");
    let opt=document.getElementById("g11");
        opt.style.backgroundColor = 'green';
}
function inp()
    {
        sessionStorage.clear();
        var inpu=document.getElementById("Football");
        var final="1";
        if(inpu.checked==true){
            final=final+"T";
        }
        else{
            final=final+"F";
        }

        inpu=document.getElementById("Cricket");
        if(inpu.checked==true){
            final=final+"T";
        }
        else{
            final=final+"F";
        }
        inpu=document.getElementById("Badminton");
        if(inpu.checked==true){
            final=final+"T";
        }
        else{
            final=final+"F";
        }

        inpu=document.getElementById("Table Tennis");
        if(inpu.checked ==true){
            final=final+"T";
        }
        else{
            final=final+"F";
        }
        var pass=sessionStorage.setItem("rec",final);
        window.open("../question 2/index.html", "_self");
    }