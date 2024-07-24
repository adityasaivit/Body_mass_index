function result()
{
    let w=Number(document.querySelector(".wei").value)
    let h=Number(document.querySelector(".hei").value)
    let bmi=w/(h*h);

    document.querySelector(".res-disp").innerText=bmi.toFixed(2);
}
