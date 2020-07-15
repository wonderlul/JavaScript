let myArray = [1,1,1,1,2,1,1,1];
let firstArray = [];
let firstResult = 0;
let secondArray = [];
let secondResult = 0;
let indexToRemove;
let secondIndexToRemove;

//Wyciągam trzy kule z tablicy myArray i wrzucam je do wyimaginowanego kapelusza "firstArray".
//Jednocześnie sumuję wagi kul za pośrednictwem firstResult 
while(myArray.length>5){
   indexToRemove = myArray[Math.floor(Math.random()*myArray.length)];
   firstArray.push(indexToRemove);
   firstResult = firstResult + indexToRemove;
   myArray.splice(myArray.indexOf(indexToRemove),1);
}

//Wyciągam kolejne trzy kule z tablicy myArray i wrzucam je do wyimaginowanego kapelusza "secondArray"
//Jednocześnie sumuję wagi kul za pośrednictwem secondResult 
while(myArray.length < 6 & myArray.length > 2){
   indexToRemove = myArray[Math.floor(Math.random()*myArray.length)];
   secondArray.push(indexToRemove);
   secondResult = secondResult + indexToRemove;
   myArray.splice(myArray.indexOf(indexToRemove),1);
}

//Porównuję wagi dwóch kapeluszy firstArray oraz secondArray za pośrednictwem dwóch zmiennych firstResult i secondResult
//Jednocześnie upewniam się, że oba kapelusze nie ważą tyle samo
//Jeżeli kapelusz pierwszy jest cięższy:
if(firstResult !== secondResult & firstResult > secondResult){
        indexToRemove = firstArray[Math.floor(Math.random()*firstArray.length)]; //Wyciągam kulę z pierwszego kapelusza
        firstArray.splice(firstArray.indexOf(indexToRemove),1); // Usuwam tę kulę z pierwszego kapelusza
        secondIndexToRemove = firstArray[Math.floor(Math.random()*myArray.length)]; // Wyciągam kolejną kulę z pierwszego kapelusza
        firstArray.splice(firstArray.indexOf(secondIndexToRemove),1); // Usuwam tę kulę z pierwszego kapelusza
        if(indexToRemove !== secondIndexToRemove & indexToRemove > secondIndexToRemove){ //Porównuję wagę dwóch kul, upewniając się, że nie ważą tyle samo
            console.log(indexToRemove); // Jeżeli pierwsza kula jest cięższa, wyświetl jej "wagę"
        } else if (indexToRemove !== secondIndexToRemove & indexToRemove < secondIndexToRemove){
            console.log(secondIndexToRemove); //Jeżeli druga kula jest cięższa, wyświetl jej "wagę"
        } else{
            console.log(firstArray[0]); //Jeżeli dwie wyjęte z kapelusza kule ważą tyle samo, wyświetl "wagę" trzeciej kuli
        }
//Jeżeli kapelusz drugi jest cięższy:
    } else if(firstResult !== secondResult & firstResult < secondResult){
        indexToRemove = secondArray[Math.floor(Math.random()*secondArray.length)]; //Wyciągam kulę z drugiego kapelusza
        secondArray.splice(secondArray.indexOf(indexToRemove),1); //Usuwam tę kulę z drugiego kapelusza
        secondIndexToRemove = secondArray[Math.floor(Math.random()*secondArray.length)]; //Wyciągam kolejną kulę z drugiego kapelusza
        secondArray.splice(secondArray.indexOf(secondIndexToRemove),1);// Usuwam tę kulę z drugiego kapelusza
        if(indexToRemove !== secondIndexToRemove & indexToRemove > secondIndexToRemove){ //Porównuję wagę dwóch kul, upewniając się, że nie ważą tyle samo
            console.log(indexToRemove); // Jeżeli pierwsza kula jest cięższa, wyświetl jej "wagę"
        } else if (indexToRemove !== secondIndexToRemove & indexToRemove < secondIndexToRemove){
            console.log(secondIndexToRemove); //Jeżeli druga kula jest cięższa, wyświetl jej "wagę"
        } else{
            console.log(secondArray[0]); //Jeżeli dwie wyjęte z kapelusza kule ważą tyle samo, wyświetl "wagę" trzeciej kuli
        }
    //Jeżeli oba kapelusze ważą tyle samo:
    } else{
        indexToRemove = myArray[Math.floor(Math.random()*secondArray.length)]; //Wyjmuję jedną kulę
        secondIndexToRemove = myArray[Math.floor(Math.random()*secondArray.length)]; // Wyjmuję drugą kulę
        if(indexToRemove > secondIndexToRemove){
            console.log(indexToRemove); //Jeżeli pierwsza kula jest cięższa, wyświetl jej "wagę"
        } else {
            console.log(secondIndexToRemove); //Jeżeli druga kula jest cięższa, wyświetl jej "wagę"
        }
    };



