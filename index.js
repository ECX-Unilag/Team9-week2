function openNav() {
    var x = document.getElementById("links");
    var y = document.getElementById("open");
    var z =document.getElementById("close");
    if(x.style.display == 'block'){
        x.style.display = 'none';
    }
    else{
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'block';
    }
}
function closeNav() {
    var x = document.getElementById("links");
    var y = document.getElementById("open");
    var z =document.getElementById("close");
    if(x.style.display == 'block'){
        x.style.display = 'none';
        z.style.display = 'none';
        y.style.display = 'block';
    }
}

const select = document.querySelector('select');
select.addEventListener('change', result);
function result() {
    
    const choice = select.value;

        fetch('https://api.covid19api.com/total/country/' + choice)
        .then(res => res.json())  //Converting it from an object to a JSON file
        .then(data => {
            console.log(data);
            var lastItem = data[data.length - 1];     
            console.log(lastItem) ;
            document.getElementById('confirmed').innerHTML = lastItem.Confirmed ;
            document.getElementById('recovered').innerHTML = lastItem.Recovered ;
            document.getElementById('deaths').innerHTML = lastItem.Deaths ;
        })
        .catch(err => console.log(err));
}
result();



function stateResults() {

        fetch('https://covidnigeria.herokuapp.com/api')
        .then(res => res.json())  //Converting it from an object to a JSON file
        .then(data => {
            console.log(data);
            document.getElementById('lagos-confirmed').innerHTML = data.data.states[0].confirmedCases ;
            document.getElementById('lagos-recovered').innerHTML = data.data.states[0].discharged ;
            document.getElementById('lagos-death').innerHTML = data.data.states[0].death ;

            document.getElementById('fct-confirmed').innerHTML = data.data.states[1].confirmedCases ;
            document.getElementById('fct-recovered').innerHTML = data.data.states[1].discharged ;
            document.getElementById('fct-death').innerHTML = data.data.states[1].death ;

            document.getElementById('oyo-confirmed').innerHTML = data.data.states[2].confirmedCases ;
            document.getElementById('oyo-recovered').innerHTML = data.data.states[2].discharged ;
            document.getElementById('oyo-death').innerHTML = data.data.states[2].death ;

            document.getElementById('edo-confirmed').innerHTML = data.data.states[3].confirmedCases ;
            document.getElementById('edo-recovered').innerHTML = data.data.states[3].discharged ;
            document.getElementById('edo-death').innerHTML = data.data.states[3].death ;

            document.getElementById('rivers-confirmed').innerHTML = data.data.states[4].confirmedCases ;
            document.getElementById('rivers-recovered').innerHTML = data.data.states[4].discharged ;
            document.getElementById('rivers-death').innerHTML = data.data.states[4].death ;
        })
        .catch(err => console.log(err));
}