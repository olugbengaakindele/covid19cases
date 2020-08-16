//https://covid-19.dataflowkit.com/v1/world

//for all the world in one endpoinrt
//https://covid-19.dataflowkit.com/v1


const ctyCmb = document.querySelector("#country_select");

loadEventListeners();
function loadEventListeners (){
    ctyCmb.addEventListener("change", getCovidFacts);
}


class newRow{
    constructor(total_cases,total_death,total_recovered,active_cases){
        this.total_cases = total_cases;
        this.total_death = total_death;
        this.total_recovered = total_recovered;
        this.active_cases = active_cases;

        addRow(){
            
        }
    }

}
//populate the country combobox 
// output = '';
// xhr = new XMLHttpRequest();
// xhr.open("GET",'https://restcountries.eu/rest/v2/all', true);
// xhr.onload = function (){

//     if (xhr.status === 200 ){

//         let data =JSON.parse( this.responseText);
//         data.forEach(function(ctys){

//             output += `<option>${ctys.name}</option>`
//         })
        
//     }else {
//         output += `<option>Something Went Wrong</option>`
//     }
// ctyCmb.innerHTML = output;
// }
// xhr.send();

//populate country select box
let strt = 0
let output = [];
let cty_opt = ''
xhr = new XMLHttpRequest();
xhr.open('GET', 'https://covid-19.dataflowkit.com/v1', true);
xhr.onload = function(){
    if (xhr.status === 200){
        //this gets all the countryies
        data = JSON.parse(this.responseText);
        data.forEach(function(cty){
            output[strt] = cty.Country_text;
            strt += 1;
            output.sort();
                
        })
    }

    output.forEach(function(country){
        cty_opt += `<option>${country}</option>`
    })
    ctyCmb.innerHTML = cty_opt ;
}
xhr.send();

//this function uses the fetch method to get covid 19 number through API( https://covid-19.dataflowkit.com/v1/world)
function getCovidFacts(){
    let coutry_select = ctyCmb.value;
    xhr = new XMLHttpRequest;
    xhr.open("GET",`https://covid-19.dataflowkit.com/v1/${coutry_select}`,true)
    xhr.onload = function(){
        if (xhr.status === 200 ){
            let data = JSON.parse(this.responseText);
            messge_out = `${data.Country_text} has ${data["Active Cases_text"]} cases`;
            
            let msg_con = document.querySelector("#message");
            
            msg_con.innerHTML = output_msg

        }
    }
    xhr.send()
}




// output_msg = `
//                         <ul class="list-group mt-5">
//                         <li list-group-item d-flex justify-content-between align-items-center>Last Update : <span class="badge badge-pill"> ${data["Last Update"]}</span></li>
//                         <li list-group-item d-flex justify-content-between align-items-center>Total Cases : <span class="badge badge-primary badge-pill">${data["Total Cases_text"]}<span></li>
//                         <li list-group-item d-flex justify-content-between align-items-center>Total Death :  <span class="badge badge-danger badge-pill">${data["Total Deaths_text"]}</span></li>
//                         <li list-group-item d-flex justify-content-between align-items-center>Total Recovered :  <span class="badge badge-success badge-pill">${data["Total Recovered_text"]}</span></li>
//                         <li list-group-item d-flex justify-content-between align-items-center>Active Cases : <span class="badge badge-warning badge-pill"> ${data["Active Cases_text"]}</span></li>
//                         </ul>
//                         `