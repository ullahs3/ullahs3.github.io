function fetchAdvice(){
    $.get("https://api.adviceslip.com/advice", function(data) {
        let result = JSON.parse(data);
        console.log("From Advice API: " + JSON.stringify(result));
        $("#response").html(result.slip.advice);
    });
    fetchDog();
}

async function fetchDog() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const result = await response.json();
        console.log("Image URL: " + result.message);
        document.getElementById("dog-image").src = result.message;
    } catch (error) {
        console.error("Error fetching the image:", error);
    }
}