function calc() {
    console.log("a, b, c")
    let a = parseInt(elementA.innerText);
    let b = parseInt(elementB.innerText);
    let c = parseInt(elementC.innerText);
    // ax2+bx+c=0
    console.log(a, b, c)

    let disc, x1, ax2;

    disc=Math.pow(b, 2)-4*a*c;

    if (disc>0){
        x1=((-b-Math.sqrt(disc))/2*a).toFixed(2);

        x2=((-b+Math.sqrt(disc))/2*a).toFixed(2);
        console.log(x1, x2, disc)
        result=" x1="+x1 +"   x2="+x2;
    }
    if (disc<0){
    result = " корней нет"
    }



    document.getElementById("result").innerText =  result;


}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', calc);