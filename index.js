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

function introductionWithLanguageOptional(name, language = "JavaScript") {
    
    const defParam = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return defParam
}
introductionWithLanguageOptional("Gracie");

function introductionWithLanguageOptional1(name, language) {
    return ("Hi, my name is " +name+ " and I am learning to program in "+language+".");
}
introductionWithLanguageOptional1("Gracie", "Python");
