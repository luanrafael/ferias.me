var HH = 19;

var MI = 00;

var SS = 00;

var ferias = new Date(2014,4,9,HH,MI,SS);
var retorno = new Date(2014,5,1,13,00,00);


var isFerias = false;

function atualizaContador() {

	if(!isFerias){
		contador(ferias,'Férias chegando em:\n','');
	} else {
		contador(retorno,'Estou de FÉRIAS, volto em:\n','As férias acabaram :( ... go go Work now!!!');
	}
	setTimeout(atualizaContador,1000);
}

function contador (futuro,strfaltam,strcalback) {
	var hoje = new Date();
	var ss = parseInt((futuro - hoje) / 1000);
	var mm = parseInt(ss / 60);
	var hh = parseInt(mm / 60);
	var dd = parseInt(hh / 24);
	ss = ss - (mm * 60);
	mm = mm - (hh * 60);
	hh = hh - (dd * 24);
	var faltam = strfaltam + ' ';
	
	faltam += (dd > 0) ? formatstr(dd) + 'dia(s)\n' : '' ;

	var fhoras = formatstr(hh) + ':' + formatstr(mm) + ':' + formatstr(ss);

	faltam += fhoras;

	if (dd+hh+mm+ss > 0) {
		document.getElementById('contador').textContent = faltam;
	} else {
		if(!isFerias){
			isFerias = true;
		} else {
			document.getElementById('contador').textContent = strcalback;

		}
	}
	

}

function formatstr(str){

	return (str.toString().length == 1) ? '0'+ str : str;
}
