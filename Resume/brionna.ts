function displayPosition(companyName: string, jobTitle: string, description: string ) {
    console.log(companyName, jobTitle, description);
    
    displayPosition('Car Dealership Website', 'Web Developer', ':Creating my own website that gives a virtual customer access to good quality cars ' +
    ' * Building my own experience and skills to pursue my career job ' +
    ' * Teaching myself the fundamentals of software development and web design ' );
    displayPosition('New Age Inc. — ', ':Access Control Manager ', ':Control the barriers for the officials ' + 
    ' * Check the access list for visitors in order to give them access to the facility ' +
    ' * Make phone calls to the lobbies for assistance with a visitor ' );
    displayPosition('Market Basket —', 'Cashier ', 'Counted money in drawers at the beginning of shift to ensure correct amount ' +
    ' Greeted customers as they enter the establishment ' +
    ' Maintain clean and orderly checkout areas ');
    
    var displaySkill=  function(skillName: string, cool: boolean ) {
        var result = '';
        if(cool){
        result= 'BAM:';
        console.log(result + skillName);
        }
    }
    
    
    var Name = 'Brionna McElhaney';
    Name.toUpperCase();
    
    console.log('Name:' + Name);
    console.log('Career: ' + ' Potential Candidate for Web Developer');
    
    console.log( 'Description: ' + ' I am very nice person,' + 'I love to meet new faces ' + 
    ' I am determined to get the job of my dreams ' + ' I Love cartoons');
    
    console.log('My Interest: ' + 
    ' * Frond-End Development' +
    ' * Database');
    
    console.log('My Previous Experience ' + 
    companyName + ':Car Dealership Website —' + jobTitle + ':Web Developer ' +
    ' 2 years+' +
    description +
    ' :Creating my own website that gives a virtual customer access to good quality cars ' +
    ' * Building my own experience and skills to pursue my career job ' +
    ' * Teaching myself the fundamentals of software development and web design ' +
    '' +
    '' +
    companyName + 'New Age Inc. — ' + jobTitle + ':Access Control Manager ' +
    ' May 2018 - April 2019' +
    description +
    ' :Control the barriers for the officials ' + '' +
    ' * Check the access list for visitors in order to give them access to the facility ' +
' * Make phone calls to the lobbies for assistance with a visitor ' +
'' +
'' +
companyName + ':Market Basket —' + jobTitle + ':Cashier ' +
' February 2017- May 2018 ' +
description +
' :Counted money in drawers at the beginning of shift to ensure correct amount ' +
' Greeted customers as they enter the establishment ' +
' Maintain clean and orderly checkout areas ');


console.log('Skills: ');
displaySkill('JavaScript ', true);  
displaySkill('HTML', true);
displaySkill(' CSS ', true); 
displaySkill(' * Java' + ' * C++' +
' * Python2' +
' * Visual Studio Code' +
' *Linear Programming' +
' * OpenACC' + 
' * OpenMP' + 
' * OpenGL' +
' * Angular 5' +
' * GitHub' +
' * NodeJS' +
' * Typescript');

}