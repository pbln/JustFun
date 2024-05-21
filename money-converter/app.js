const msg = document.querySelector(".msg")
const dropdowns = document.querySelectorAll(".dropdown select");
const url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const btn = document.querySelector("button")

for (let select of dropdowns) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } else if (select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
      }
      select.append(newOption);
    } select.addEventListener("change", (evt) => {
        flagChange(evt.target);
      });
    }



const flagChange = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener('click', (e)=>{
  btn.innerText="Converted";
 
})

  




const moneyexchange = async(event)=>{
    const amt = document.querySelector(".amount input").value
        event.preventDefault();
        let response = await fetch(url  +`/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`)
        let data = await response.json();
        const t = (toCurr.value.toLowerCase()) ;
        let result = data[t];
        msg.innerHTML=`${amt} ${fromCurr.value} = ${result*amt} ${toCurr.value}`
        
      }

