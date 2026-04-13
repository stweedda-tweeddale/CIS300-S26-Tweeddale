const creatures = [
    {
        name: 'Goblin',
        type: 'Humanoid',
        alignment: 'Neutral Evil',
        challengeRating: 0.25,
        description: 'Small, green-skinned humanoids known for their cunning and mischievous nature.',
    },
    {
        name: 'Dragon',
        type: 'Dragon',
        alignment: 'Varies',
        challengeRating: 10,
        description: 'Large, powerful reptiles capable of flight and breathing fire, often hoarding treasure.',
    },
    {
        name: 'Troll',
        type: 'Giant',
        alignment: 'Chaotic Evil',
        challengeRating: 5,
        description: 'Large, regenerating creatures that are often found in dark forests or caves.',
    },
    {
        name: 'Elf',
        type: 'Humanoid',
        alignment: 'Varies',
        challengeRating: 0.5,
        description: 'Graceful, long-lived humanoids with pointed ears, known for their affinity with nature and magic.',
    },
    {
        name: 'Orc',
        type: 'Humanoid',
        alignment: 'Chaotic Evil',
        challengeRating: 0.5,
        description: 'Brutish, aggressive humanoids with green skin and tusks, often found in warbands.',
    },
    {
        name: 'Giant Spider',
        type: 'Beast',
        alignment: 'Unaligned',
        challengeRating: 0.25,
        description: 'Large, venomous spiders that can climb virtually any surface and are often found in dark, damp areas.',   
    }
];

const creatureBody = document.querySelector('#creatureTable tbody');
const searchInput = document.querySelector('#searchInput');

function displayCreatures(creatures) {
    creatureBody.innerHTML = '';

    if (creatures.length === 0) {
        creatureBody.innerHTML = '<tr><td colspan="5">No creatures found.</td></tr>';
        return;
    }

    creatures.forEach(creature => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${creature.name}</td>
            <td>${creature.type}</td>
            <td>${creature.alignment}</td>
            <td>${creature.challengeRating}</td>
            <td>${creature.description}</td>
        `;
        creatureBody.appendChild(row);
    });
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredCreatures = creatures.filter(creature => 
        creature.name.toLowerCase().includes(query) ||
        creature.type.toLowerCase().includes(query) ||
        creature.alignment.toLowerCase().includes(query) ||
        creature.challengeRating.toString().includes(query) ||
        creature.description.toLowerCase().includes(query)
    );
    displayCreatures(filteredCreatures);
    });
displayCreatures(creatures);



