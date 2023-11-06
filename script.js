function getFormvalue() {
    //Write your code here
	let firstname = document.getElementsByTagName("input")[0];
	let lastname = document.getElementsByTagName("input")[1];
	alert(firstname.value +" "+lastname.value);
}
