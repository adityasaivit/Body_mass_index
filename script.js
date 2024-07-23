let bmi=0;
function calc()
{
    var w=document.querySelector("#weight").value;
    let h=document.querySelector("#height").value;

    bmi=w/(h*h);
    bmi=bmi.toFixed(2);
    document.querySelector(".bmi").innerText=bmi;
    bmi=Number(bmi);
    console.log(typeof(bmi<18))
    if(bmi<18)
    {
        document.querySelector(".res").innerText="Bro! You are too thin";
        document.querySelector(".res").style.color="red";
    }
    else if(bmi>18 && bmi<28)
    {
        document.querySelector(".res").innerText="Bro! you are ok now";
        document.querySelector(".res").style.color="rgb(255, 217, 0)";

    }
    else{
        document.querySelector(".res").innerText="Bro! you are overweight";
        document.querySelector(".res").style.color="red";
    }
}

