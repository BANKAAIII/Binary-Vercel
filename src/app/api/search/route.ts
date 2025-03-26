// Array Generation. 
// Key Generation.


function numbersGeneraiton():Array<number>{
    const numbers =[];

    for(let i=0; i<10;i++){
        numbers[i] = Math.floor(Math.random()*10);

    }
    return numbers;
}

function keyGenration(numbers:Array<number>):number{
    const key = Math.floor(Math.random()* numbers.length);
    return key;
}

export async function POST (){
    let array =[];
    array = numbersGeneraiton();
    const key = keyGenration(array);

    console.log(array);

   

    return new Response(
        JSON.stringify({ success: true, message: "Generation successful",
            array: array,
            key: key
         }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );

    
}