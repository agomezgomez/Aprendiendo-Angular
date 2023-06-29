
export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Alejandro',
}

const passenger2: Passenger = {
    name: 'Sakura',
    children: ['Chaewon', 'Munchae']
}

const printChildren = ( passenger: Passenger ) => {

    const howManyChildren = passenger.children?.length || 0; // si children.lenght está vacío muestra 0

    console.log(passenger.name, howManyChildren)
        
    
}
