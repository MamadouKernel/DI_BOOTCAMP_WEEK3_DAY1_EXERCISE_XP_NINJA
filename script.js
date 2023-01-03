function createCalendar(year, month) {
    // Obtenir la date du premier jour du mois
    let firstDay = new Date(year, month, 1);

    // Obtenir le numéro du jour de la semaine (0 pour dimanche, 1 pour lundi, etc.)
    let firstDayWeekday = firstDay.getDay();

    // Si le premier jour tombe un dimanche, mettre à jour le numéro du jour de la semaine pour être 7 (afin de l'afficher en tant que dimanche dans le calendrier)
    if (firstDayWeekday === 0) {
        firstDayWeekday = 7;
    }

    // Obtenir le nombre de jours dans le mois
    let numDays = new Date(year, month + 1, 0).getDate();

    // Créer un tableau pour stocker le calendrier
    let calendar = [];

    // Créer le titre du calendrier (noms des jours de la semaine)
    let weekdays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    let titleRow = `<tr><th>${weekdays.join("</th><th>")}</th></tr>`;
    calendar.push(titleRow);

    // Créer une ligne vide pour le premier jour du mois (pour aligner le calendrier correctement)
    let emptyCells = "";
    for (let i = 1; i < firstDayWeekday; i++) {
        emptyCells += "<td></td>";
    }

    // Créer le reste du calendrier
    let currentDay = 1;
    while (currentDay <= numDays) {
        let row = "<tr>";
        for (let i = 1; i <= 7; i++) {
            if (currentDay > numDays) {
                row += "<td></td>";
            } else {
                row += `<td>${currentDay}</td>`;
                currentDay++;
            }
        }
        row += "</tr>";
        calendar.push(row);
    }

    // Créer le tableau HTML et le retourner
    return `<table>${calendar.join("")}</table>`;
}  

let annee = prompt("veuillez entrer une Annee au format AAAA")
let day = prompt("veuillez entrer le jour au format JJ")
let calendarHTML = createCalendar(`${annee}`,`${day}`);
document.body.innerHTML = calendarHTML;
