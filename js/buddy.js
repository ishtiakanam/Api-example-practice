const loadBuddies = () => {
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddis')
    for(const buddy of buddies){
        console.log(buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last},Email: ${buddy.email}`;
        buddiesContainer.appendChild(p)
    }
}