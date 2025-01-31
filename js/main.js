let imgInput = document.getElementById("myFile");
let imgContainer = document.getElementById("items");

document.getElementById("legg-til").addEventListener("click", function () {
    if (imgInput.files && imgInput.files.length > 0) {
        for (let i = 0; i < imgInput.files.length; i++) {
            let imgURL = URL.createObjectURL(imgInput.files[i]);

            // Create the main container for each new item
            let itemDiv = document.createElement("div");
            itemDiv.style.display = "inline-block"; // Ensures items appear side by side
            itemDiv.style.margin = "10px";

            // Create a div for the editable name
            let nameDiv = document.createElement("div");
            nameDiv.classList.add("utstyr1");

            let nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.value = "New Item"; // Default text
            nameInput.style.border = "none";
            nameInput.style.background = "transparent";
            nameInput.style.textAlign = "center";
            nameInput.style.fontFamily = "fantasy";
            nameInput.style.width = "100%";

            nameDiv.appendChild(nameInput);

            // Create a div for the availability box
            let availableDiv = document.createElement("div");
            availableDiv.classList.add("box1text");

            let availableText = document.createElement("p");
            availableText.innerText = "Tilgjengelig:";
            availableText.style.marginRight = "5px";

            let counter = document.createElement("p");
            counter.classList.add("boxtext");
            counter.innerText = getRndInteger(10, 100); // Random availability count

            availableDiv.appendChild(availableText);
            availableDiv.appendChild(counter);

            // Create the image element
            let imgElement = document.createElement("img");
            imgElement.src = imgURL;
            imgElement.classList.add("lagt-bilder");

            // Append all elements to the main container
            itemDiv.appendChild(nameDiv);
            itemDiv.appendChild(availableDiv);
            itemDiv.appendChild(imgElement);

            imgContainer.appendChild(itemDiv);
            
        }
    } else {
        alert("No file selected!");
    }
});

// Function to generate a random integer between min and max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Function to generate a random integer between min and max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Store the original values in an object
const originalValues = {};

// Initialize all counters with random values when the page loads
document.querySelectorAll(".boxtext").forEach(counter => {
    const randomNum = getRndInteger(10, 100); // Generate a random number between 10 and 100
    counter.innerText = randomNum; // Set the random number as the initial value
    originalValues[counter.id] = randomNum; // Store the original count
});

// Add event listeners to all "utlei" buttons
document.querySelectorAll(".subtractBtn").forEach(button => {
    button.addEventListener("click", function () {
        const counterId = this.getAttribute("data-counter");
        const counter = document.getElementById(counterId);
        let currentCount = parseInt(counter.innerText);
        let tilgjenglig = document.getElementById("tilgjenglig");

        if (currentCount > 0) {
            currentCount--;
            counter.innerText = currentCount;
        } else {
            counter.innerText = "Ikke tilgjengelig";
            tilgjenglig.innerHTML = "";
            alert("Number can't go below zero!");
        }
    });
});

// Add event listeners to all "add" buttons with the limit check
document.querySelectorAll(".addBtn").forEach(button => {
    button.addEventListener("click", function () {
        const counterId = this.getAttribute("data-counter");
        const counter = document.getElementById(counterId);
        let currentCount = parseInt(counter.innerText);

        // Ensure the count doesn't exceed the original value
        if (currentCount < originalValues[counterId]) {
            currentCount++;
            counter.innerText = currentCount;
        } else {
            alert("har ikke noe mer til å legge til!");
        }
    });
});
