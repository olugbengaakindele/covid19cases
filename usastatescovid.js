//https://covid-19.dataflowkit.com/v1/world

//for all the world in one endpoinrt
//https://covid-19.dataflowkit.com/v1


//daily usa historical case
//https://api.covidtracking.com/v1/us/daily.json

const sts_cmb = document.querySelector("#state_select");
const body = document.querySelector('body');
loadEventListeners();

function loadEventListeners(){
    sts_cmb.addEventListener("change", getStateFact);
    //body.addEventListener("load", loadCMB)
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



function getStateFact(){
    let state_select = sts_cmb.value;


    states.forEach(function(st){
        if (st.name == state_select ){
            st_cd = st.abbreviation;
            //get the state code to pass into api string
            console.log(st_cd);
        
        }
    }
    )
}