
var HH = 19;

var MI = 00;

var SS = 00;

function atualizaContador() {

	var hoje = new Date();
	var todayd= hoje.getDate();
	var todaym= hoje.getMonth();
	var todayy= hoje.getFullYear();
	var futuro = new Date(todayy,todaym+1,todayd,HH,MI,SS);
	var ss = parseInt((futuro - hoje) / 1000);
	var mm = parseInt(ss / 60);
	var hh = parseInt(mm / 60);
	var dd = parseInt(hh / 24);
	ss = ss - (mm * 60);
	mm = mm - (hh * 60);
	hh = hh - (dd * 24);
	var faltam = '';
	faltam += (toString(hh).length) ? hh+' hr, ' : '';
	faltam += (toString(mm).length) ? mm+' min e ' : '';
	faltam += ss+' seg';
	if (dd+hh+mm+ss > 0) {
		document.getElementById('contador').innerText = faltam;
		setTimeout(atualizaContador,1000);

	} else {
		document.getElementById('contador').innerText = 'CHEGOU!!!!';
		setTimeout(atualizaContador,1000);
	}

}
