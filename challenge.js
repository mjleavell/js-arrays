// DATA STRUCTURE FOR CHALLENGE (4=ARRAYS; 5=STRINGS/NUMBERS)
let elizabethSanger = {
    congressionalDistrict: 5, // P TAG
    statements: [
        { statement: "pie for everyone", category: "Jobs" },
        { statement: "no taxes on pie", category: "Taxes" },
        { statement: "No working on friday", category: "Jobs" }
    ],
    donationFormUrl: 'www.google.com',  // ANCHOR TAG
    events: [
        { date: '08/27/2018', title: "Zoe's birthday", description: "eat all the pie at the party" },
        { date: '08/28/2018', title: "Arrays", description: "all the looping" },
        { date: '09/4/2018', title: "Some important event", description: "SUPER important" },
        { date: '09/4/2018', title: "Running", description: "from the police" },
        { date: '03/14/2019', title: "Pi Day", description: "Eat it all???" }
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
    biography: "I'm so cool!  please elect me", //P TAG
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
    missionStatement: "Do good stuff",  //P TAG
    voterRegistrationUrl: 'www.google.com'  //ANCHOR TAG
};

// CHALLENGE 1---PRINT ALL INFO TO THE DOM
// CREATE 9 DIVS; WILL HAVE 10 FUNCTIONS
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;  // not using += because we want to update string not add new one to it
};

// VOTER REGISTRATION
const voterRegistrationStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}" target="_blank">Register to Vote Here</a>`;
    printToDom(newString, 'voterRegistration');
};
voterRegistrationStringBuilder();   //have to call function in order for it r

// DONATION FORM
const donationFormStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.donationFormUrl}" target="_blank">Donate Here</a>`;
    printToDom(newString, 'donationForm');
};
donationFormStringBuilder();

// CONGRESSIONAL DISTRICT
const congressionalDistrictStringBuilder = () => {
    const newString = `<p>Congressional District: ${elizabethSanger.congressionalDistrict}</p>`;
    printToDom(newString, 'congressionalDistrict');
};
congressionalDistrictStringBuilder();

// BIOGRAPHY
const biographyStringBuilder = () => {
    const newString = `<p>Biography: ${elizabethSanger.biography}</p>`;
    printToDom(newString, 'biography');
};
biographyStringBuilder();

// STATEMENTS FOR LOOP





// CHALLENGE 2
// add events function (adding somethign to array so use push method), 
// add a volunteer, congressional district changes, or statement changes

// const updateVoterRegistrationStringBuilder = () => {
//     //do some stuff
//     voterRegistrationStringBuilder();
//};