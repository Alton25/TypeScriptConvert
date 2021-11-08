const States: number = 50;
var sum = 5 + 4;
/* Create a function*/

function sayHello2(){
    alert('hello World');
}

function checkAge2(name: string, age: number){ 
    if(age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!")
        }
    }
    checkAge2('Charles', 21);
        checkAge2('Abby', 27);
        checkAge2('James', 18);
        checkAge2('John', 17);

        var vegetables = ['Broccoli', 'Squash', 'Zuchini', 'Corn', 'Cabbage', 'Greens', 'Green Beans', 'Carrots'];
        vegetables.forEach(v => console.log(v));

        interface pet  { 
            name: string;
             breed: string[]; 
            };
            function myDog(animal: pet){
            console.log(animal.name);
            console.log(animal.breed);
            }
myDog({name: 'Oreo', breed:['Border Collie', 'Austrailian Shepard']});

            let checkAgeArr = [{name:'Quinton', age:29} , {name:'Brandon', age:28} , {name:'Kourtney',age:21}, {name:'Sierra', age:18}, {name:'Whitney', age:16}]; 
            for(var c =0; c < checkAgeArr.length; c++) {
            checkAge2(checkAgeArr[c].name, checkAgeArr[c].age);
            }

            var getLength = function(word: string) {
                if(word.length %2 == 0 ){
                console.log('The World is nice and even');
                } 
                else {
                console.log('The world is an odd place');
                }
                }
                getLength('Hello World');