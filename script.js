const profiles = [
    {
        name: "Sani Marma",
        role: "FOUNDER & CEO",
        bio: "Creative Solutions and Innovation.",
        img: "sani.jpg"
    },
    {
        name: "Ukhing Mong",
        role: "Leader",
        bio: "Lead Everyone.",
        img: "ukhing.jpg"
    },
    {
        name: "Thowai Wang",
        role: "Spy",
        bio: "Knows all the secrets.",
        img: "Thowai.jpg"
    },
    {
        name: "Cho Ching",
        role: "Team Member",
        bio: "HABIBI, Come to Dubai.",
        img: "choching.jpg"
    },
    {
        name: "Ukhing Mong",
        role: "Team Member",
        bio: "Sniper Expert.",
        img: "ukhing2.jpg"
    },
    {
        name: "Mong Sain",
        role: "Singer",
        bio: "Friendly.",
        img: "mongsain.jpeg"
    },
    {
        name: "Kanak TCG",
        role: "Singer",
        bio: "Funny.",
        img: "kanak.jpg"
    },
    {
        name: "Raiyan",
        role: "Team Member",
        bio: "Community building and Management.",
        img: "raiyan.jpg"
    },
    {
        name: "Faruk",
        role: "Team Member",
        bio: "Part time student, Full time Vlogger.",
        img: "faruk.jpg"
    },
    {
        name: "Jawjaw",
        role: "Team Member",
        bio: "GAY.",
        img: "jawjaw.jpg"
    },
    {
        name: "Shahed",
        role: "Team Member",
        bio: "Village People.",
        img: "shahed.jpg"
    }
];

function loadProfiles() {
    const profilesContainer = document.getElementById('profiles');
    profiles.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card';
        profileCard.innerHTML = `
            <img src="${profile.img}" alt="${profile.name}">
            <h3>${profile.name}</h3>
            <p><strong>Role:</strong> ${profile.role}</p>
            <p>${profile.bio}</p>
        `;
        profilesContainer.appendChild(profileCard);
    });
}
window.onload = loadProfiles;

function openModal(profile) {
    const modal = document.getElementById('profileModal');
    document.getElementById('modalImg').src = profile.img;
    document.getElementById('modalName').textContent = profile.name;
    document.getElementById('modalRole').textContent = profile.role;
    document.getElementById('modalBio').textContent = profile.bio;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = 'none';
}

window.onload = () => {
    loadProfiles();
    document.getElementById('closeModal').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('profileModal');
        if (e.target === modal) {
            closeModal();
        }
    });
};
