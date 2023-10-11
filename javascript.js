//Task1 | 1den 100e qeder ededler icerisinde 5e ve 3e bolunenlerin toplamin tapan algoritm


let sum = 0;  //5e ve 3e bolunenlerin toplami deyerini ozunde saxlayir

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0 ) {
        sum += i;
    }
}
console.log(`1den 100e qeder ededler icerisinde 5e ve 3e bolunenlerin toplami ${sum} dir`);


//Task2 | Verilen ededin 2nin quvveti olub olmadigini bildiren algoritm


let num = 64;
while (num > 1) {
    num /=2;
}
if (num === 1) {
    console.log(`2nin quvvetidir`);
}
else{
    console.log(`2nin quvvetI deyil`);

}



//Task3 | Verilen ededin sade ve murekkeb oldugunu bildiren algoritm


let number = 19; //verilen eded
let isnumcomposite = false; //ededin murekkeb ve ya sade oldugu melumatini saxlayan boolean deyeri

for (let i = 2; i < number; i++) //ededi 1 ve ozunden basqa bu araliqda olan ededlere bolunub bolunmediyini yoxlayir
{ 
    if (number % i === 0) {
        isnumcomposite = true
        break;
    }
    
}

if (isnumcomposite === true) {
    console.log(`${number} ededi murekkeb ededdir`);
}
else{
    console.log(`${number} ededi sade ededdir`);
}

//Task4 | Gelen aylara gore hansi fesil oldugunu bildiren algoritm.Deger Consoledan girilecek.Sabit deger olmayacaq.

let fesil = prompt("Ayin adini daxil edin!(meselen:sentyabr,oktyabr, ...)");

switch (fesil) {
    case "dekabr":
    case "yanvar":
    case "fevral":
        console.log("Qis feslidir");
        document.write("Qis feslidir");
        break;
    case "mart":
    case "aprel":
    case "may":
        console.log("Yaz feslidir");
        document.write("Yaz feslidir");

        break;
    case "iyun":
    case "iyul":
    case "avqust":
        console.log("Yay feslidir");
        document.write("Yay feslidir");
        break;
    case "sentyabr":
    case "oktyabr":
    case "noyabr":
        console.log("Payiz feslidir");
        document.write("Payiz feslidir");
        break;

    default:
        console.log("Yanlis deyer daxil olunub");
        document.write("Yanlis deyer daxil olunub");
        break;
}
