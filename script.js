const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const teamContainer = document.querySelector(".team-container")

console.log(teamContainer)

function addProfile() {
  for (let i = 0; i < teamMembers.length; i++) {
    let element = teamMembers[i]

    teamContainer.innerHTML +=
      `<div class="card" style="width: 18rem;">
                <img src="${element.img}" class="" alt="${element.name}">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.role}</p>
                    <p class="card-text">${element.email}</p>
                </div>
            </div>
     `
    console.log(element)
  }
}

addProfile()

const btn = document.getElementById('button') 
//prendo gli input della compilazione del form
btn.addEventListener ('click', function (event) {

  event.preventDefault()

  name = document.getElementById('nome').value
  role = document.getElementById('role').value
  email = document.getElementById('email').value
  img = document.getElementById('img').value


  teamMembers.push(
    {
      name,
      role,
      email,
      img
    }
  )

  console.log(teamMembers)
  
  teamContainer.innerHTML = ''

  addProfile()


})

// btn.addEventListener('click' , function  )
