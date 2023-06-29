
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Antifragile",
    details: {
        author: "Le Sserafim",
        year: 2022
    }
}

const song = 'New song';

const { song:anotherSong, songDuration:duration, details } = audioPlayer;

const { author, year } = details;

console.log('Cancion: ', anotherSong );
console.log('Duracion: ', duration );
console.log('Autor: ', author);
console.log('Año: ', year);


// DESESTRUCTURACION DE ARRAYS

const [ , , trunks = 'Not found']: string[] = ['goku', 'Vegeta']

console.error('Personaje 3: ', trunks );




















export{};