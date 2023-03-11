let interface = {
	                menu: [
	                          {nome: "Inicial",       href: "inicial.html"      },
                              {nome: "Institucional", href: "institucional.html"},
                              {nome: "Produtos",      href: "produtos.html"     },
                              {nome: "Serviços",      href: "servicos.html"     }
                          ],
	                dados: [
	                          {colunas: 3, texto: "Este é o texto que vai na primeira coluna", corFundo: "bg-success"  },
	                          {colunas: 6, texto: "Este é o texto que vai na segunda coluna",  corFundo: "bg-primary"  },
	                          {colunas: 3, texto: "Este é o texto que vai na terceira coluna", corFundo: "bg-secondary"}
	                       ],
	                tipoContainer: "container-fluid"
	            };

let geraMenu = idMenu => {
	                         let menuHTML = interface.menu.map( (elem) => `<li class="nav-item">
                                                                               <a class="nav-link" href="${elem.href}">${elem.nome}</a>
                                                                           </li>`).join("");

	                         document.getElementById(idMenu).innerHTML = menuHTML;
	                     }

let geraDados = idDados => {
	                           let dadosHTML = `<div class="${interface.tipoContainer}"><div class="row">` + 
	                                            interface.dados.map( (elem) =>  `<div class="col-${elem.colunas} text-center ${elem.corFundo}">
	                                            ${elem.texto}</div>`).join("") + `</div></div>`;

	                            document.getElementById(idDados).innerHTML = dadosHTML;
                           }