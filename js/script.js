// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite
const teamMemb = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    }, 
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];

// MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < teamMemb.length; i++) {    
    // values printed on console
    console.log(`Nome: ${teamMemb[i].name}. Ruolo: ${teamMemb[i].role}. Foto: ${teamMemb[i].image}`);
}

// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
const members = document.getElementById("team-members");

for (let i = 0; i < teamMemb.length; i++) {
    
    const memberInfo = (`Nome: ${teamMemb[i].name}, Ruolo: ${teamMemb[i].role}, Foto: ${teamMemb[i].image}`);
    
    const memberParagraph = document.createElement("p");
    
    memberParagraph.textContent = memberInfo;
    
    members.appendChild(memberParagraph);
}