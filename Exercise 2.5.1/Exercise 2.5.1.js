let name = "Ilya";

alert( `hello ${1}` ); // hello 1, так как вместо переменной стоит число 1

alert( `hello ${"name"}` ); // hello name, так как вместо переменной вставлена строка "name"

alert( `hello ${name}` ); //  hello Ilya, так как после hello вставлена переменная, которая была объявлена ранее