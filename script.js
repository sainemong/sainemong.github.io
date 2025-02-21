const profiles = [
    { name: "Sani Marma", role: "FOUNDER & CEO", bio: "Creative Solutions and Innovation.", img: "sani.jpg" },
    { name: "Ukhing Mong", role: "Leader", bio: "Lead Everyone.", img: "ukhing.jpg" },
    { name: "Thowai Wang", role: "Spy", bio: "Knows all the secrets.", img: "thowai.jpg" },
    { name: "Cho Ching", role: "Team Member", bio: "HABIBI, Come to Dubai.", img: "choching.jpg" },
    { name: "Ukhing Mong", role: "Team Member", bio: "Sniper Expert.", img: "ukhing2.jpg" },
    { name: "Mong Sain", role: "Singer", bio: "Friendly.", img: "mongsain.jpeg" },
    { name: "Kanak TCG", role: "Singer", bio: "Funny.", img: "kanak.jpg" },
    { name: "Raiyan", role: "Team Member", bio: "Community building and Management.", img: "raiyan.jpg" },
    { name: "Faruk", role: "Team Member", bio: "Part-time student, Full-time Vlogger.", img: "faruk.jpg" },
    { name: "Jawjaw", role: "Team Member", bio: "GAY.", img: "jawjaw.jpg" },
    { name: "Shahed", role: "Team Member", bio: "Village People.", img: "shahed.jpg" },
    { name: "Rahat", role: "Team Member", bio: "Condom Supplier.", img: "rahat.jpg" }
];

// Typing Animation
const text = "MS-13, a tight-knit community of friends where laughter, camaraderie, and unforgettable moments are at the heart of everything we do. We're more than a group—we're family, united by fun, mutual respect, and unwavering support. Whether it's sharing stories, creating memories, or just being there for each other, MS-13 is where friendships thrive and adventures never end! Are you ready to embrace the brotherhood?";

let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("animated-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Render Profiles
function renderProfiles() {
    const profilesContainer = document.getElementById('profiles');
    profilesContainer.innerHTML = profiles.map((profile, index) => `
        <div class="profile-card" data-index="${index}">
            <img src="${profile.img}" alt="${profile.name}" onerror="this.src='default.jpg';">
            <h3>${profile.name}</h3>
            <p><strong>Role:</strong> ${profile.role}</p>
            <p>${profile.bio}</p>
        </div>
    `).join('');
}

// Modal Logic
function setupModal() {
    const modal = document.getElementById('profileModal');
    const modalContent = document.querySelector('.modal-content');
    const modalImg = document.getElementById('modalImg');
    const closeModal = () => {
        modal.style.display = 'none';
        modalContent.classList.remove('show');
    };

    document.getElementById('closeModal').onclick = closeModal;
    window.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    document.getElementById('profiles').onclick = (e) => {
        const card = e.target.closest('.profile-card');
        if (!card) return;

        const { name, role, bio, img } = profiles[card.dataset.index];

        // Ensure valid image before showing modal
        if (!name || !role || !bio || !img) return;

        modalImg.src = img;
        document.getElementById('modalName').textContent = name;
        document.getElementById('modalRole').textContent = role;
        document.getElementById('modalBio').textContent = bio;

        modal.style.display = 'flex';
        modalContent.classList.add('show');
    };

    // Ensure modal is hidden initially
    modal.style.display = 'none';
}

// Scroll Hide Header
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.chatgpt-nav ul');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Initialize Profiles and Modal
window.onload = () => {
    renderProfiles();
    setupModal();
    typeWriter();  // Combine typewriter with other initializations
};
