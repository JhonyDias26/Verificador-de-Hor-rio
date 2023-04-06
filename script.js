function carregar() {
    var msg1 = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    if (hora >= 0 && hora < 12) {
        //Bom dia!!!
        img.src = 'manha1.png';
        document.body.style.backgroundColor = '#e2cd9f';
        msg1.innerHTML = `Agora são <strong>${hora} horas ${minutos} minutos e ${segundos} segundos</strong>. <br> <br> BOM DIA!`;
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!!!
        img.src = 'tarde1.png';
        document.body.style.background = '#b9846f';
        msg1.innerHTML = `Agora são <strong> ${hora} horas ${minutos} minutos e ${segundos} segundos</strong>. <br> <br> BOA TARDE!`;
    } else {
        //Boa Noite!!!
        img.src = 'noite1.png';
        document.body.style.background = '#515154';
        msg1.innerHTML = `Agora são <strong> ${hora} horas ${minutos} minutos e ${segundos} segundos</strong>. <br> <br> BOA NOITE!`;
    }
}