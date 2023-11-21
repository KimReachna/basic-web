function ex2() {
    var city = {
        'Минск': 'Беларусь',
        'Москва': 'Россия',
        'Киев': 'Украина'
    };
    for (var key in city) {
        alert(key + ' : столица ' + city[key]);
    }
}
function ex9(){
    var city1 = {};
    alert(city1.name = 'Москва');
    alert(city1.population = 12593252);
}
function ex1(){
    document.write('Ура!')
}
function ex10(){
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    n2.value = n1.value;
}