const wrapper = document.querySelector(".wrapper"),
    selectBtn = wrapper.querySelector(".select-btn"),
    searchInp = wrapper.querySelector("input"),
    options = wrapper.querySelector(".options");
const wrapper2 = document.querySelector(".wrapper2");
const selectBtn2 = wrapper2.querySelector(".select-btn2");

let names = ["Ahmed", "Ali", "Kareem", "Aabdulrhman", "Bader", "Abdulaziz", "Basm",
    "Bassam", "Naif", "Nawaf", "Yazeed", "Ibrahim", "Mussab", "Dalia", "Dina ",
    "Hussam", "Afaf ", "Heba ", "Abeer ", "Hafsa ", "Hajer ", "Lara ", "Majed",
    "Mohammed", "Malik", "Salman", "Salem", "Fahad", "Maha ", "Mai ", "Mansour",
    "Marwa ", "Najat ", "Nejla ", "Tariq", "Samy", "Sultan", "Saleh", "Salem",
    "Talal", "Turki", "Zaynab ", "Zahra ", "Samira ", "Osama", "Yasser"
];

function addName(selectedName) {
    options.innerHTML = "";
    names.forEach(name => {
        let isSelected = name == selectedName ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${name}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addName();

function updateName(selectedLi) {
    searchInp.value = "";
    addName(selectedLi.innerText);
    wrapper.classList.remove("activ");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = names.filter(data => {
        return data.toLowerCase().includes(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="font-size:16px;padding:15px;text-align:center">Oops!</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("activ"));
selectBtn2.addEventListener("click", () => wrapper2.classList.toggle("activ"));