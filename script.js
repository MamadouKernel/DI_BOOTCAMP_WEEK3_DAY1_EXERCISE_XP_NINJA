function createCalendar(year, month) {
    // Création de la table et du titre
    let calendar = document.createElement("table");
    let title = document.createElement("caption");
    title.innerHTML = `Calendrier pour ${month}/${year}`;
    calendar.appendChild(title);

    // Création des en-têtes de colonne pour les jours de la semaine
    let weekRow = document.createElement("tr");
    let weekdays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    for (let day of weekdays) {
        let weekDay = document.createElement("th");
        weekDay.innerHTML = day;
        weekRow.appendChild(weekDay);
    }
    calendar.appendChild(weekRow);

    // Obtention du premier jour du mois et du nombre de jours dans le mois
    let firstDay = new Date(year, month - 1, 1);
    let numDays = new Date(year, month, 0).getDate();

    // Calcul du nombre de semaines et de la première semaine partielle
    let numWeeks = Math.ceil((numDays + firstDay.getDay()) / 7);
    let partialWeek = (7 - firstDay.getDay()) % 7;

    // Création des lignes de semaine et des cellules de jour
    let day = 1;
    for (let i = 0; i < numWeeks; i++) {
        let weekRow = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let dayCell = document.createElement("td");
            if (i === 0 && j < partialWeek || day > numDays) {
                dayCell.innerHTML = "&nbsp;";
            }else {
                dayCell.innerHTML = day;
                day++;
            }
            weekRow.appendChild(dayCell);
        }
        calendar.appendChild(weekRow);
    }

    return calendar;
}

let annee = prompt("veuillez entrer une Annee au format AAAA")
let day = prompt("veuillez entrer le jour au format JJ")

let calendar = createCalendar(`${annee}`,`${day}`);
document.body.appendChild(calendar);
