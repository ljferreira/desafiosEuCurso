let menu = [
	           {nome: "Inicial",       href: "inicial.html"      },
               {nome: "Institucional", href: "institucional.html"},
               {nome: "Produtos",      href: "produtos.html"     },
               {nome: "Serviços",      href: "servicos.html"     },
	       ];

let geraMenu = idMenu => {
	                         let menuHTML = menu.map( (elem) => `<li class="nav-item">
                                                                     <a class="nav-link" href="${elem.href}">${elem.nome}</a>
                                                                 </li>`).join("");

	                         document.getElementById(idMenu).innerHTML = menuHTML;
	                     }