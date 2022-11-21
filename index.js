function introduction(name) {
    return ("Hi, my name is " +name+".");
}
introduction("Aki");
introduction("Samip");

function introductionWithLanguage(name, language) {
    return ("Hi, my name is " +name+ " and I am learning to program in " +language+".");
}
introductionWithLanguage("Aki", "Ember.js");
introductionWithLanguage("Samip", "React");

const language = "JavaScript"
function introductionWithLanguageOptional(name, language) {
    
    const defParam = `Hi, my name is ${name} and I am learning to program in JavaScript.`
    return defParam
}
introductionWithLanguageOptional("Gracie", language);

function introductionWithLanguageOptional(name, language) {
    return ("Hi, my name is " +name+ " and I am learning to program in "+language+".");
}
introductionWithLanguageOptional("Gracie", "Python");
