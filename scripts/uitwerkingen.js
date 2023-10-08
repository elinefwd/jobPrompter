/*/
//opdracht 1a:
console.log ("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " " + "medewerkers")

//opdracht 1b:
console.log ("De afdeling marketing " + departments.marketing.description + "is een leuke werkplek")

//opdracht 1c:
console.log ("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + "medewerkers" )

//opdracht 1d:
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager." + departments.sales.jobs[1].description)

//const userInput = prompt('Hoi! Hoe heet je?');
//console.log(userInput);

//opdracht 2a:
const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]")
console.log(userInput);

//opdracht 2b:
switch (userInput) {
    case "marketing":
        console.log("Je koos + userInput + . + departments.marketing.description + ")
        break;
    case "sales":
        console.log("Je koos + userInput + . + departments.sales.description + ")
        break;
    case "customer-service":
        console.log("Je koos + userInput + . + departments [customer-service].description + ")
        break;
    default:
        console.error("ongeldige keuze")
}
/*/

//opdracht 3:
const jobChoice = prompt("Je koos marketing. Over welke functie wil je meer weten?" +
    " Voer een getal tussen  0 en 3 in. 0: + departments.marketing.jobs[0].title + " +
    "1: + departments.marketing.jobs[1].title + 2: + departments.marketing.jobs[2].title + " +
    "3: + departments.marketing.jobs[3].title + ")
console.log(jobChoice);

switch(jobChoice){
    case "0":
        console.log("Je koos" +departments.marketing.jobs[0].title+ "een uitdagende rol!" + "departments.marketing.jobs[0].description + ");
}
