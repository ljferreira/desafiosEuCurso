let cadastro = [];
			
let tabela;

let gerarTabela     = () =>  "<table border=1><tr><td>Nome</td><td>Email</td><td>Telefone</td><td>Filial</td><td>Observações</td><td>Remover</td></tr>" + 
                             cadastro.map((elem, indice) => `<tr><td>${elem.Nome}</td><td>${elem.Email}</td><td>${elem.Fone}</td><td>${elem.Filial}</td>
                             <td>${elem.Obs}</td><td onclick="removerCadastro(${indice}); exibirCadastro();"><img id="idDeletar" src="img/deletar.svg"></td></tr>`).join("") + "</table>"
			
let exibirCadastro  = () => {
				                tabela = gerarTabela();
				                document.getElementById("idTabela").innerHTML = tabela;
				            }
			
let inserirCadastro = () => {
				                cadastro = [...cadastro, {Nome:   document.getElementById("idNome").value, 
				                	                      Email:  document.getElementById("idEmail").value,
				                	                      Fone:   document.getElementById("idFone").value,
				                	                      Filial: estendeFilial(document.getElementById("idFilial").value),
				                	                      Obs:    document.getElementById("idObs").value
				                	                     }
				                	       ];
				                cadastro.sort((a,b) => (a.Nome > b.Nome) ? 1 : (a.Nome < b.Nome) ? -1 : 0);
				                exibirCadastro();
				                return false;
				            }

/*let inserirCadastro = () => {
				                cadastro = [...cadastro, {Nome:   document.getElementById("idNome").value, 
				                	                      Email:  document.getElementById("idEmail").value,
				                	                      Fone:   document.getElementById("idFone").value,
				                	                      Filial: document.getElementById("idFilial").value,
				                	                      Obs:    document.getElementById("idObs").value
				                	                     }
				                	       ].map( elem => ({Nome: elem.Nome, Email: elem.Email, Fone: elem.Fone, Filial: estendeFilial(elem.Filial), Obs: elem.Obs}));
				                cadastro.sort((a,b) => (a.Nome > b.Nome) ? 1 : (a.Nome < b.Nome) ? -1 : 0);
				                exibirCadastro();
				                return false;
				            }*/

let removerCadastro = indice => cadastro = cadastro.filter((elem, ind) => ind != indice);

let estendeFilial   = filial => {
	                                if (filial == "poa") 
	                                	return "Porto Alegre";
	                                if (filial == "sp") 
	                                	return "São Paulo";
	                                if (filial == "rj") 
	                                	return "Rio de Janeiro";
	                                return filial;
                                }