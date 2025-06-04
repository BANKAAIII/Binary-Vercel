export async function POST() {
    function numbersGeneration(): number[] {
      return Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
    }
  
    function keyGeneration(numbers: number[]): number {
      return Math.floor(Math.random() * numbers.length);
    }
  
    const array = numbersGeneration();
    const key = keyGeneration(array);
  
    console.log(array);
  
    return new Response(
      JSON.stringify({
        success: true,
        message: "Generation successful",
        array,
        key,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Enable CORS if needed
          "Access-Control-Allow-Methods": "POST",
        },
      }
    );
  }
  