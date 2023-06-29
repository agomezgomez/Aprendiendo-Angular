

function addNumbers(a: number, b: number){
    return a+b;
}

const addNumbersArrow = ( a: number, b: number ): string => {
    return `${a + b }`; // me devuleve el resultado en formato String
}


function multiply( firstNumber: number, secondNumber?: number, base: number = 2 ){ //pasamos como obligatorio el firstNumber, 
    //secondNumber puede ser opcional y si no declaramos la base por defecto es 2
    return firstNumber * base; 
}

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ) => {

    character.hp += amount;

}

const strider: Character ={
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}

healCharacter( strider, 10 );
strider.showHp();







//const result: number = addNumbers(1,2);
//console.log({result})




export{};