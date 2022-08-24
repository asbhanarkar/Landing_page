
//Global variables
const navigationBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
/*add function use for making navigation bat and adding li tag and anchor tag
    to the DOM set class for activate css clases and add sections and smooth scrolling function call directly */
function add(){
    
    for(let i = 0; i < sections.length; i++){
    	// create list tag
        let listT = document.createElement('li');
        //crate anchor tag
        let anchorT = document.createElement('a');
        // anchor tag set class
        anchorT.setAttribute("class" ,"menu__link")
        // anchor tag set id
        anchorT.setAttribute("id", i )
        // anchor tag added section name
        anchorT.innerHTML = sections[i].dataset.nav;
        // added linl
        anchorT.setAttribute("href", "#" + sections[i].id);
        // call function
        SmoothScroll(sections[i].id, anchorT);
       // anchor tag added to list tag
        listT.appendChild(anchorT);
        // list tag added to the DOM 
        navigationBar.appendChild(listT);

    }
}

/* Smooth Scrooling function perform when click the navigation bar section smooth scroll and goes to that section and stop  */

function SmoothScroll(secId, anch) {

    anch.addEventListener("click", event =>{
    	// default function
        event.preventDefault();
        
        let selectSec = document.getElementById(secId);
        // smooth scroll 
        selectSec.scrollIntoView({
        
            behavior:"smooth"
            
        });
    });
}

add();



/*Scroll then activate the deactivate the class = 'your-active-class' first time i make three function active deactive and offeset function remove three function and make only one fuction. for offest then use if else conditon for activate and deactivate css properties when scroll down that time highlighted specific section and specific navigation bar  */
window.addEventListener('scroll', function Activation() {

    for(let i = 0; i < sections.length; i++){
    
        const offeset = Math.floor(sections[i].getBoundingClientRect().top);
        
        if(offeset < 200 && offeset >= -200){
        	// section activate css 
        	sections[i].classList.add('your-active-class');
        	// highlited specific section
        	sections[i].style.background= "rgb(0, 204, 255)";
        	//highlighted specific navifation section
        	document.getElementById(i).style.background="yellow";
        	
        }
        
        else{
        	// remove active css
        	sections[i].classList.remove('your-active-class');
        	// change to original color section
    		sections[i].style.background= "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)";
    		// change to original color navigation bar
    		document.getElementById(i).style.background = "rgb(20, 150, 224)";
        }
      
    }
});
