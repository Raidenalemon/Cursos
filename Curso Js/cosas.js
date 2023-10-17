function login() {
	
	let user = document.getElementById("usuario").value;
	let pass = document.getElementById("clave").value;

	if(user=="ale" && pass=="2324")
	{
		window.location="Perfil.html";
	}

	else
	{
		alert("Datos Incorrectos");
	}

}