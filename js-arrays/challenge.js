console.log('yo wasssuppp in challenge')
//this will have ten functions

let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
      {category: "In Regards to Jobs:", statement: "Pie for everyone"},
      {category: "In Regard to Taxes:", statement: "No taxes on pie"},
      {category: "In Regard to Jobs:", statement: "No working on friday"}
    ],
    donationFormUrl: 'www.google.com',
    events: [
      {date: '08/27/2018', title:"Zoe's birthday", description:"eat all the pie at the party"},
      {date: '08/28/2018', title:"Arrays", description:"all the looping"},
      {date: '09/4/2018', title:"Some important event", description:"SUPER important"},
      {date: '09/4/2018', title:"Running", description:"from the police"},
      {date: '03/14/2019', title:"Pi Day", description:"Eat it all???"}
    ],
    volunteers: [
      {
        name: 'Callan',
        address: '500 interstate blvd S',
        email: 'callan@yomamma.com',
        phone: '1234567890',
        availability: '9-5',
        activities: 'phone calls only'
      },
      {
        name: 'Lauren',
        address: '1 main street',
        email: 'lauren@comcast.net',
        phone: '1134567890',
        availability: 'never',
        activities: 'collecting money'
      },
      {
        name: 'Bernard',
        address: '1 Bernard Way',
        email: 'Bernard@thebear.net',
        phone: '1134567890',
        availability: 'all day',
        activities: 'everything'
      }
    ],
    biography: "I'm so cool!  please elect me",
    images: [
      {
        imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
        description: "The Crew",
        type: "constituents"
      },
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "Elizabeth at the fair",
        type: "headshot"
      },
      {
        imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
        description: "Elizabeth and her homies",
        type: "constituents"
      },
      {
        imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
        description: "All the people of district 5",
        type: "constituents"
      },
    ],
    missionStatement: "Do good stuff",
    voterRegistrationUrl: 'www.google.com'
  };

  const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };

  const voterRegistrationStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}" target="_blank">Register to vote here dude!</a>`;
    printToDom(newString, 'voterRegistration');
  };


  const congressionalDistrictBuilder = () => {
    const newString = `<p>Elizabeth Sanger's Congressional District: ${elizabethSanger.congressionalDistrict}</p>`;
    printToDom(newString, 'congressionalDistrict');
  };

  const donationFormStringBuilder = () => {
      const newString = `<a href="https://${elizabethSanger.donationFormUrl}" target="_blank">Donate here yo!</a>`;
      printToDom(newString, 'donationForm');
  };


 const statementStringBuilder = () => {
     let newString = '';
     for (let i = 0; i < elizabethSanger.statements.length; i++) {
        newString += `<div class="statement">`;
        newString +=   `<h2>${elizabethSanger.statements[i].category}</h2>`;
        newString +=   `<h4>${elizabethSanger.statements[i].statement}</h4>`;
        newString += `</div>`;
     }
     printToDom(newString, 'statements');//has to be outside of the for loop!
 };

 const eventsStringBuilder = () => {
     let newString ='';
     for (let i = 0; i <elizabethSanger.events.length; i++){
        newString += `<div class="events">`;
        newString +=   `<h3><u>${elizabethSanger.events[i].date}</u></h3>`;
        newString +=   `<h4>${elizabethSanger.events[i].title}</h4>`;
        newString +=   `<h5>${elizabethSanger.events[i].description}<h5>`;
        newString += `</div>`;
     }
     printToDom(newString, 'events');
};


const volunteersStringBuilder = () => {
    let newString = '';
    for (let i =0; i < elizabethSanger.volunteers.length; i++){
        newString += `<div class="volunteers">`;
        newString +=   `<h3>${elizabethSanger.volunteers[i].name}</h3>`;
        newString +=   `<h4>${elizabethSanger.volunteers[i].address}</h4>`;
        newString +=   `<h4>${elizabethSanger.volunteers[i].email}</h4>`;
        newString +=   `<h4>${elizabethSanger.volunteers[i].phone}</h4>`;
        newString +=   `<h4>${elizabethSanger.volunteers[i].availability}</h4>`;
        newString +=   `<h4>${elizabethSanger.volunteers[i].activities}</h4>`;
        newString += `</div>`;
    }
    printToDom(newString, 'volunteers');
};


const biographyStringBuilder = () => {
  const newString = `<p>${elizabethSanger.biography}</p>`;
  printToDom(newString, 'biography');
};



const missionStatementStringBuilder = () => {
  const newString = `<p>Our mission statement: "${elizabethSanger.missionStatement}"</p>`;
  printToDom(newString, 'missionStatement');
};

<<<<<<< HEAD



const biographyStringBuilder = () => {
  const newString = `<p>${elizabethSanger.biography}</p>`;
  printToDom(newString, 'biography');
};


=======
>>>>>>> 55081463123b3e9429d1ebec2b4404d4cc3cebe0
const imagesStringBuilder = () => {
  let newString = '';
  for (let i = 0; i < elizabethSanger.images.length; i++){
    newString += `<div class = "images">`;
    newString +=   `<img src='${elizabethSanger.images[i].imageUrl}'></img>`;
    newString +=   `<h4>${elizabethSanger.images[i].description}</h4>`;
    newString +=   `<h4>${elizabethSanger.images[i].type}</h4>`;
    newString += `</div>`;
  }
  printToDom(newString, 'images');
};


<<<<<<< HEAD
const missionStatementStringBuilder = () => {
  const newString = `<p>Our mission statement: "${elizabethSanger.missionStatement}"</p>`;
  printToDom(newString, 'missionStatement');
};



=======
>>>>>>> 55081463123b3e9429d1ebec2b4404d4cc3cebe0

missionStatementStringBuilder();
voterRegistrationStringBuilder();
congressionalDistrictBuilder();
donationFormStringBuilder();
statementStringBuilder();
eventsStringBuilder();
volunteersStringBuilder();
biographyStringBuilder();
imagesStringBuilder();





const updateVoterRegistration = (newUrl) => {
    elizabethSanger.voterRegistrationUrl = newUrl;
    voterRegistrationStringBuilder();
  }
updateVoterRegistration('classtracker.zoeames.com');

const updateDistrict = (newDistrict) => {
  elizabethSanger.congressionalDistrict = newDistrict;
  congressionalDistrictBuilder();
}
updateDistrict("234587");

const updateDonationForm = (newForm) => {
  elizabethSanger.donationFormUrl = newForm;
  donationFormStringBuilder();
}
updateDonationForm('https://www.gourmetcheesedetective.com/American-artisanal-cheeses.html');

const updateBiography = (newBio) => {
  elizabethSanger.biography = newBio;
  biographyStringBuilder();
}
updateBiography("I am better than Bobby Newport. That is all.");

const updateStatement = (newStatement) => {
  elizabethSanger.missionStatement = newStatement;
  missionStatementStringBuilder();
}
updateStatement("Let's make Pawnee great again!");

const newUpdateVolunteer = () => {
  let newVolunteer = elizabethSanger.volunteers.push({name: 'Andy', address: '2635 Muncy Avenue', email: 'dwyerandy@email.com', phone: '6731245678', availability: 'all day every day', activities: 'being bert macklin'});
  volunteersStringBuilder();
};

const newUpdateEvent = () => {
  let newEvent = elizabethSanger.events.push({date: 'Tomorrow', title: 'Cupcake Banquet', description: 'Eating cupcakes'});
  eventsStringBuilder();
};

const newUpdateImages = () => {
  let newImages = elizabethSanger.images.push({imageUrl: '', description: 'What we eat on the road', type: 'constituent jerky'})
  imagesStringBuilder();
};

const newUpdateStatements = () => {
  let newStatements = elizabethSanger.statements.push({category: 'In Regards to Parks', statement: 'All racoons must have rabies shots! I promise you!'});
  statementStringBuilder();
};

newUpdateEvent();
newUpdateVolunteer();
newUpdateImages();
newUpdateStatements();