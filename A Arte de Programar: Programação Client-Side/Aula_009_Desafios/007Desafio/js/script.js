let cadastro = [];

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

let inserirCadastro = () => {cadastro = [...cadastro, 
	                                        {
	                                        	nome:    document.getElementById("idNome").value,
	                                        	email:   document.getElementById("idEmail").value,
                                                setor:   checaSetor(),
                                                diasRec: checaDiaRecado(),
                                                cidade:  cidade[document.getElementById("idCidade").value],
                                                obs:     document.getElementById("idObs").value

	                                        }
	                                    ];}

let exibirCadastro = () => `<table class="table mt-3"><thead>
                                    <tr><th>Nome</th><th>Email</th><th>Setor</th><th>Dia(s) Recado(s)</th><th>Cidade</th><th>Observações</th><th>Remover</th></tr>
                                </thead>
                                <tbody> 
                                    ${cadastro.map((elem, indice) => `<tr><td>${elem.nome}</td>
                                    	                                  <td>${elem.email}</td>
                                    	                                  <td>${elem.setor}</td>
                                    	                                  <td>${elem.diasRec}</td>
                                    	                                  <td>${elem.cidade}</td>
                                    	                                  <td>${elem.obs}</td>
                                    	                                  <td onclick="remover(${indice});">Remover</td>
                                    	                              </tr>`).join("")}
                                </tbody>
                            </table>`

let remover = (indice) => {
	                          cadastro = cadastro.filter( (elem, ind) => indice != ind); 
                              document.getElementById("idDados").innerHTML = exibirCadastro();
                          }

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

	inserirCadastro();
	document.getElementById("idDados").innerHTML = exibirCadastro();
	
	return false;

}