function Country(name, iso, capital, population) {
    this.name = name;
    this.iso = iso;
    this.capital = capital;
    this.population = population;
}


var countries = [
    new Country("Bahamas", "BS", "Nassau", 301790),
    new Country("Canada", "CA", "Ottawa", 33679000),
    new Country("Germany", "DE", "Berlin", 81802257),
];


countries.push(new Country("Spain", "ES", "Madrid", 46505963));
countries.push(new Country("United Kingdom", "GB", "London", 62348447));


for (var i = 0; i < countries.length; i++) {
    var c = countries[i];
    document.write("<div class='box'>");
    document.write("<img src='flags/" + c.iso + ".png' alt='Flag of " + c.name + "' class='boxImg'>");
    for (var propertyName in c) {
        document.write('<strong>' + propertyName + ': </strong>');
        document.write(c[propertyName] + '<br>');
    }
    document.write('</div>');
}
