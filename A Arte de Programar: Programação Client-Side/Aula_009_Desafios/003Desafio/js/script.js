let cidade = {
	lj : "Lajeado", 
	poa: "Porto Alegre", 
	scs: "Santa Cruz do Sul",
	va : "Venâncio Aires"
};

let enviar = () => {
	
	alert(`O nome informado é ${document.getElementById("idNome").value}.`);
	alert(`O email informado é ${document.getElementById("idEmail").value}.`);
	alert(`A cidade escolhida é ${cidade[document.getElementById("idCidade").value]}.`);
	alert(`As observações são: \n ${document.getElementById("idObs").value}`);

}