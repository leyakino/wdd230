const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(upcoming) {
        const towns = upcoming['towns'];
        const page = window.location.pathname;
        let townIndex = 6;

        if (page.includes("fish")) {
            townIndex = 2
        } else if (page.includes('preston')) {
            townIndex = 6
        } else if (page.includes('soda')) {
            townIndex = 0
        }

        console.log(towns);

        towns[townIndex].events.forEach(upcoming => {
            let event = document.createElement('li');
            event.innerText = upcoming;
            document.getElementById('events').appendChild(event);
        });
    });

/*
0 soda
2 fish
6 preston
*/

/*
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (prestonevents) {
        const towns = prestonevents['towns'];
        for (let i=0; i<towns.length; i++) {
            if (towns[i].name == 'Preston') {
                let ul = document.createElement('ul');
                let l1 = document.createElement('li');
                let l2 = document.createElement('li');
                let l3 = document.createElement('li');

                l1.textContent = towns[i].events[0];
                l2.textContent = towns[i].events[1];
                l3.textContent = towns[i].events[2];

               
                ul.appendChild(l1);
                ul.appendChild(l2);
                ul.appendChild(l3);
                
                document.getElementById('presevents').appendChild(ul);
                console.log(i);

            }
        }});*/