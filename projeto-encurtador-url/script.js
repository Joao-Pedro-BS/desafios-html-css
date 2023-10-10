const Btn_encurtar = document.getElementById('btn-encurtar');
const Btn_reiniciar = document.getElementById('btn-reiniciar');

Btn_encurtar.addEventListener('click', EncurtadorURL);

function EncurtadorURL(){
    var Urloriginal = document.getElementById('url-encurtar').value;
    var apiURL = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(Urloriginal);
    var Urlencurtada = document.getElementById('url-encurtada');
    
    fetch(apiURL).then(response => response.text()).then(data => {
        Urlencurtada.value = data;
    }).catch(error =>{
        Urlencurtada.value = 'Erro: Impossível encurtar esse URL!';
    });
}

Btn_reiniciar.addEventListener('click', () => {
    location.reload();
}); 