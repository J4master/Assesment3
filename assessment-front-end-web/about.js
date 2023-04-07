console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit){
	alert("form submitted successfully.")
}/////not rly sure how this question wanted me to do this..