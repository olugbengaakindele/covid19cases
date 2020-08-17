//https://covid-19.dataflowkit.com/v1/world

//for all the world in one endpoinrt
//https://covid-19.dataflowkit.com/v1


//daily usa historical case
//https://api.covidtracking.com/v1/us/daily.json

const sts_cmb = document.querySelector("#state_select");

loadEventListeners();

function loadEventListeners(){

}

// xhr = new XMLHttpRequest();
// xhr.open("GET","states.txt", true)
// xhr.onload= function(){
//     if (xhr.status === 200 ){
//         console,log(xhr.status)
//     }
// }
// xhr.send();



//load states into combox;
let all_states = []
states.forEach(function(st){
   all_states += `<option>${st.name}</option>`;
}
)
sts_cmb.innerHTML = all_states;


