const homePage = document.getElementById('home');
homePage.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("home clicked");
    window.location.href = "./home.html";
});

const donetNowButton = document.getElementById("donateNowButton");

donetNowButton.addEventListener('click', function(event) {
    event.preventDefault();
    const firstDonetInput = parseFloat(document.getElementById('firstdonetinput').value);

    if (firstDonetInput <= 0 || isNaN(firstDonetInput)) {
        alert("Your number is invalid");
        return;
    }

    const YourCurrentBlance = parseFloat(document.getElementById('YourCurrentBlance').innerText);
    const mainBlance = parseFloat(document.getElementById('main-blance').innerText);

    // Check if the donation exceeds the main balance
    if (mainBlance < firstDonetInput) {
        alert("There is no money in your account.");
        return;
    }

    // Update balances
    const newblance = firstDonetInput + YourCurrentBlance;
    document.getElementById("YourCurrentBlance").innerText = newblance;

    const updateBlance = mainBlance - firstDonetInput;
    document.getElementById("main-blance").innerText = updateBlance;

    // Add donation to history
    const historyItems = document.createElement('div');
    historyItems.className = "border p-8 rounded-md mb-3";
    const currentDate = new Date().toLocaleString();
    historyItems.innerHTML = `<h1 class="text-xl font-bold">${firstDonetInput} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
    <p class="text-sm text-gray-500">Date: ${currentDate}</p>
    `;
    
    const historyConteiner = document.getElementById('history-list');
    historyConteiner.insertBefore(historyItems, historyConteiner.lastChild);

    // Modal Added 

    document.getElementById('my_modal_1').showModal();
    
});

// Second number Card 


const donetNowButtontwo = document.getElementById("donateNowButtontwo");

donetNowButtontwo.addEventListener('click', function(event) {
    event.preventDefault();
    const firstDonetInputtwo = parseFloat(document.getElementById('firstdonetinputtwo').value);
    console.log(firstDonetInputtwo);
    
    if (firstDonetInputtwo <= 0 || isNaN(firstDonetInputtwo)) {
        alert("Your number is invalid");
        return;
    }

    const YourCurrentBlancetwo = parseFloat(document.getElementById('YourCurrentBlancetwo').innerText);
    const mainBlancetwo = parseFloat(document.getElementById('main-blance').innerText);
    console.log(YourCurrentBlancetwo, mainBlancetwo);
    

    // Check if the donation exceeds the main balance
    if (mainBlancetwo < firstDonetInputtwo) {
        alert("There is no money in your account.");
        return;
    }

    // Update balances
    const newblancetwo = firstDonetInputtwo + YourCurrentBlancetwo;
    document.getElementById("YourCurrentBlancetwo").innerText = newblancetwo;

    const updateBlancetwo =  mainBlancetwo - firstDonetInputtwo;
    document.getElementById("main-blance").innerText = updateBlancetwo;

    // Add donation to history
    const historyItems = document.createElement('div');
    historyItems.className = "border p-8 rounded-md mb-3";
    const currentDate = new Date().toLocaleString();
    historyItems.innerHTML = `<h1 class="text-xl font-bold">${firstDonetInputtwo} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
    <p class="text-sm text-gray-500">Date: ${currentDate}</p>
    `;
    
    const historyConteiner = document.getElementById('history-list');
    historyConteiner.insertBefore(historyItems, historyConteiner.lastChild);

    // Modal Added 

    document.getElementById('my_modal_1').showModal();
    
});

// Third number Card 


const donetNowButtonthird = document.getElementById("donateNowButtontwothird");

donetNowButtonthird.addEventListener('click', function(event) {
    event.preventDefault();
    const firstDonetInputthird = parseFloat(document.getElementById('firstdonetinputthird').value);
    console.log("btn clickde");
    
    if (firstDonetInputthird <= 0 || isNaN(firstDonetInputthird)) {
        alert("Your number is invalid");
        return;
    }

    const YourCurrentBlancethird = parseFloat(document.getElementById('YourCurrentBlancethird').innerText);
    const mainBlancethird = parseFloat(document.getElementById('main-blance').innerText);
    console.log(YourCurrentBlancethird, mainBlancethird);
    

    // Check if the donation exceeds the main balance
    if (mainBlancethird < firstDonetInputthird) {
        alert("There is no money in your account.");
        return;
    }

    // Update balances
    const newblancethird = firstDonetInputthird + YourCurrentBlancethird;
    document.getElementById("YourCurrentBlancethird").innerText = newblancethird;

    const updateBlancethird =  mainBlancethird - firstDonetInputthird;
    document.getElementById("main-blance").innerText = updateBlancethird;

    // Add donation to history
    const historyItems = document.createElement('div');
    historyItems.className = "border p-8 rounded-md mb-3";
    const currentDate = new Date().toLocaleString();
    historyItems.innerHTML = `<h1 class="text-xl font-bold">${firstDonetInputthird} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h1>
    <p class="text-sm text-gray-500">Date: ${currentDate}</p>

    `;
    
    const historyConteiner = document.getElementById('history-list');
    historyConteiner.insertBefore(historyItems, historyConteiner.lastChild);

    // Modal Added 

    document.getElementById('my_modal_1').showModal();
    
});

// History button Clicked
const historyButton = document.getElementById('history-btn');
historyButton.addEventListener('click', function() {
    historyButton.classList.add("bg-[#B4F461]");
    historyButton.classList.remove("bg-transparent", "border");

    const mainSection = document.getElementById('main-section');
    mainSection.classList.add("hidden");

    const donationButton = document.getElementById('donation-btn');
    donationButton.classList.remove("bg-[#B4F461]");
    donationButton.classList.add("bg-transparent", "border");

    const historyConteiner = document.getElementById('history-list');
    historyConteiner.classList.remove("hidden");
});

// Donation button Clicked
const donationButton = document.getElementById('donation-btn');
donationButton.addEventListener('click', function() {
    donationButton.classList.add("bg-[#B4F461]");
    donationButton.classList.remove("bg-transparent", "border");

    const historyButton = document.getElementById('history-btn');
    historyButton.classList.remove("bg-[#B4F461]");
    historyButton.classList.add("bg-transparent", "border");

    const mainSection = document.getElementById('main-section');
    mainSection.classList.remove("hidden");

    const historyConteiner = document.getElementById('history-list');
    historyConteiner.classList.add("hidden");
});



