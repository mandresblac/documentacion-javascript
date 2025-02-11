// METODOS DE STRINGS MAS USADOS

//length
"midudev".length; // 7
"midudev"[1]; //'i'

//includes
"midudev".includes("dev"); // true
"midudev".includes("hola"); // false

//indexOf
"midudev".indexOf("dudev"); // 2

//startsWith
"midudev".startsWith("midu"); // true
"midudev".startsWith("hola"); // false

//endsWith
"midudev".endsWith("dev"); // true
"midudev".endsWith("paint"); // false

//slice
"midudev".slice(0, 4); // 'midu'
"midudev".slice(4); // 'dev'

//toUperCase y tolowrCase
"midudev".toUpperCase(); // 'MIDUDEV'
"midudev".toLowerCase(); // 'midudev'

//replace
"midudev".replace("dev", "🙋"); //'midu🙋'

//replaceAll
"Buenos dias a todos y todas".replaceAll('s', '#'); //Bueno# dia# a todo# y toda#

//repeat
"midu".repeat(3); //'midumidumidu'

//trim
" midu ".trim(); // 'midu'

//split
"midudev".split(""); // ['m', 'i', 'd', 'u', 'd', 'e', 'v']
"mi du dev".split(" "); //  ['mi', 'du', 'dev']


//Mostramos en consola
console.log("midudev".length);// 7
console.log("midudev"[1]); // i
console.log("midudev".includes("dev")); //true
console.log("midudev".includes("hola")); //false
console.log("midudev".indexOf("dudev")); // 2
console.log("midudev".startsWith("midu")); // true
console.log("midudev".startsWith("hola")); // false
console.log("midudev".endsWith("dev")); // true
console.log("midudev".endsWith("paint")); //false
console.log("midudev".slice(0, 4)); // 'midu'
console.log("midudev".slice(4)); // 'dev'
console.log("midudev".toUpperCase()); // 'MIDUDEV'
console.log("midudev".toLowerCase()); // 'midudev'
console.log("midudev".replace("dev", "🙋")); //'midu🙋'
console.log("Buenos dias a todos y todas".replaceAll('s', '#'));
console.log("midu".repeat(3)); //'midumidumidu'
console.log(" midu ".trim()); // 'midu'
console.log("midudev".split("")); // ['m', 'i', 'd', 'u', 'd', 'e', 'v']
console.log("mi du dev".split(" ")); //  ['mi', 'du', 'dev']

