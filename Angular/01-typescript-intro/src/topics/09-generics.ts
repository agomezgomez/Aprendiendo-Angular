

export function whatsMyType<T>( argument: T ): T{ // le pasamos a la funcion el tipo genérico porque no sabemos 
    // el tipo del argumento que le vamos a pasar

    return argument;
}


const amIString = whatsMyType<string>('Hola mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5,6,7]);
