//La fonction setAttribute() prend 2 paramètres : l'attribut à ajouter, et sa valeur
// L'attribut sera 'style' et sa valeur sera border 3px solid red
function avecbordure(elm) {
	elm.setAttribute('style', 'border:3px solid red;');
}
// 'style'= sous menu contenant les valeurs de l'attribut css
function sansbordure(elm) {
	elm.setAttribute('style', 'border none;');
}
