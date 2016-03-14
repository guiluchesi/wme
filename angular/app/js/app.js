(function(){

var app = angular.module('wmeApp', []);

app.controller('Header', function(){
	this.menu = headerMenu;
	this.img = headerImg;
});

app.controller('Apartamento', function(){
	this.item = aptFeat;
});

app.controller('Diferenciais', function(){
	this.difs = diferenciais;
	this.decor = diferenciaisDecor;
});

app.controller('Val', function(){
	this.val = {};
});

app.directive('headerDrtv', function(){
	return {
    	restrict: 'E',
    	templateUrl: 'templates/header.html'
  };
});

app.directive('aptDrtv', function(){
	return {
    	restrict: 'E',
    	templateUrl: 'templates/apt.html'
  };
});

app.directive('difDrtv', function(){
	return {
    	restrict: 'E',
    	templateUrl: 'templates/diferenciais.html'
  };
});

var headerImg = {
	'src': 'images/menosemais.png',
	'alt': 'Menos é mais - Espaço Jacarandá'
}

var headerMenu = [
	{'nome': 'Home',
	 'url': '#header'},
	{'nome': 'Diferenciais',
	 'url': '#apartamento'},
	{'nome': 'Lazer',
	 'url': '#slider'},
	{'nome': 'Apartamento',
	 'url': '#diferenciais'},
	{'nome': '',
	 'url': '#',
	 'img': {'src': 'images/logo-nav.png', 'alt': 'Logo do Espaço Jacarandá'}},
	{'nome': 'Localização',
	 'url': '#localizacao'},
	{'nome': 'Contato',
	 'url': '#contato'},
	{'nome': 'Realizações',
	 'url': '#contato'}
];

var aptFeat = [
	{'img': 'images/up.png',
	 'el': 'h3',
	 'elClose': '/h3',
	 'content': 'Vida sustentável repleta de bem estar'},
	{'img': 'images/casa.png',
	 'el': 'p',
	 'content': 'Projeto com 37% de área permeável: de acordo com o IPTU Verde.'},
	{'img': 'images/casal.png',
	 'el': 'p',
	 'content': 'Mais conforto e segurança para a família com guarita e elevador.'}
];

var diferenciais = [
	{'tamanho': '63,50m²',
	 'target': 'modal63',
	 'img': {'src': 'images/63m2.jpg', 'alt': 'Planta de 63,50 m2'}},
	 {'tamanho': '70,90m²',
	 'target': 'modal70',
	 'img': {'src': 'images/70m2.jpg', 'alt': 'Planta de 70,90 m2'}}
];

var diferenciaisDecor = [
	{'img': 'images/fachada.jpg',
	 'alt': 'Fachada do Jacarandá'},
	{'img': 'images/decorado.jpg',
	 'alt': 'Decorado do Jacarandá'},
	{'img': 'images/fachada2.jpg',
	 'alt': 'Fachada 2 do Jacarandá'},
	{'img': 'images/fachada3.jpg',
	 'alt': 'Fachada 3 do Jacarandá'}
];

})();