
const btnclck = document.getElementById("Roll")

btnclck.onclick= function() {


    const userinput = document.getElementById("userinput").value
    const result = document.getElementById("Result")
    const diceimages = document.getElementById("diceimages")
    // console.log(userinput)

    const resultvalues = []
     const iamgesofdice = []


    for (let i = 0; i < userinput; i++) {
        const value = Math.floor(Math.random() * 6) + 1
        resultvalues.push(value)

       
        console.log(value)
        console.log(resultvalues)
         iamgesofdice.push(`<img src="images/${value}.png">`)
    }
    
    result.textContent = `Dice: ${resultvalues.join(", ")}`;
     diceimages.innerHTML = ` ${iamgesofdice.join("  ")}`;

}