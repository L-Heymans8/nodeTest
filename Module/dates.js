

// convertit en jours
let nbJours;
let interval;
function convertir(interval){
    nbJours = Math.ceil(interval / (1000 * 60 * 60 * 24));
}
// ===========================

// date actuelle
let dateDuJour = new Date();

// obtenir l'année en cours
function annee(){
    return dateDuJour.getFullYear();
} 
let dateNoel = new Date(`December 25, ${annee()} 00:00:00`);
let dateAnniveraire = new Date(`February 8, ${annee()} 00:00:00`);
let dateVacances = new Date(`October 01, ${annee()} 00:00:0`);

// ===========================
let calcul = {
    noel : function(){
        let interval = (dateNoel - dateDuJour);
        convertir(interval);
        console.log(`Reste ${nbJours} jours avant Noël.`);

    },

    anniversaire : function(){
        let interval = (dateAnniveraire - dateDuJour);
        convertir(interval);
        if(nbJours < 0){
            let reponse = 365 + nbJours;
            console.log(`Reste ${reponse} jours avant anniversaire.`);
        }
        else{
            console.log(`Reste ${nbJours} jours avant anniversaire.`);
        }
    },

    vacances : function(){
        let interval = (dateVacances - dateDuJour);
        convertir(interval);
        console.log(`Reste ${nbJours} jours avant vacances.`);

    },

}

module.exports = calcul;