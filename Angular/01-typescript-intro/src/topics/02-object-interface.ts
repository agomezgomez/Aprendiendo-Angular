
let skills: string[] = ['Bash', 'Counter', 'Healing'] //const no se pueden cambiar ya que son constantes


interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string | undefined; // hacemos que el hometwon sea opcional agregandole ?
}


const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ['Bash', 'Counter'],
};

strider.hometown = 'Rivendell';







export{};