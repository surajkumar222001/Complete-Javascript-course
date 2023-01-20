//Document Object Model (DOM)
/*
-> document -> html doc
   window-> browser
    */

//document
console.log(document);

//head
console.log(document.head);

//title
console.log(document.title);

//body
console.log(document.body);

//nav tag(repeated tag)
/*
<nav>
css-> nav{}
js->document.querySelector('nav');
jquery->$('nav');

<nav id='test'>
css-> #test{}
js->document.querySelector('#test');
jquery->$('#test');

<nav class='test'>
css-> .test{}
js->document.querySelector('.test');
jquery->$('.test');

<nav class='test'>
<a>
css-> .test a{}
js->document.querySelector('.test a');
jquery->$('.test a');


 */

//nav
let navTag=document.querySelector("nav");
console.log(navTag);

//a tag

let anchorTag=document.querySelector("nav a")
console.log(anchorTag);

//innerText
let theText=anchorTag.innerText;
console.log(theText);