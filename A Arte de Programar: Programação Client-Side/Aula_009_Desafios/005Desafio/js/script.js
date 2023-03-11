let cidade = {
	lj : "Lajeado", 
	poa: "Porto Alegre", 
	scs: "Santa Cruz do Sul",
	va : "Venâncio Aires"
};

let diaSemana = [

		{id: "idSegunda", dia: "Segunda-feira"},
		{id: "idTerca",   dia: "Terça-feira"  },
		{id: "idQuarta",  dia: "Quarta-feira" },
		{id: "idQuinta",  dia: "Quinta-feira" },
		{id: "idSexta",   dia: "Sexta-feira"  }

	];

let checaDiaRecado = () => {

	let diasRecados = "";
	for ( dia of diaSemana )
		diasRecados += document.getElementById(dia.id).checked ? dia.dia + ", " : "";
	return diasRecados.length > 0 ? diasRecados.substr(0, diasRecados.length-2) + "." : diasRecados;
}

let checaSetor = () => {

	let setores = [

			{id: "idAdm",        setor: "Administrativo"  },
			{id: "idRH",         setor: "Recursos Humanos"},
			{id: "idFinanceiro", setor: "Financeiro"      },

		];

	let setorEscolhido = "";
	for ( setor of  setores)
		setorEscolhido += document.getElementById(setor.id).checked ? setor.setor : "";
	return setorEscolhido;
}

let enviar = () => {
	
	let elemHTML = document.getElementById("idDados");
	elemHTML.innerHTML = `O nome informado é ${document.getElementById("idNome").value}.<br>
	                      O email informado é ${document.getElementById("idEmail").value}.<br>
	                      O setor escolhido é ${checaSetor()}.<br>
	                      O(s) dias(s) para recado(s) é(são) ${checaDiaRecado()}<br>
	                      A cidade escolhida é ${cidade[document.getElementById("idCidade").value]}.<br>
	                      As observações são: \n ${document.getElementById("idObs").value}`;

	return false;

}