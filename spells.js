const spells = [
    {
        name: "Fireball",
        level: 3,
        school: "Evocation",
        components: ["V", "S", "M"],
        description: "A powerful spell that launches a fiery projectile, dealing damage to enemies in its path."
    },
    {
        name: "Mage Armor",
        level: 1,
        school: "Abjuration",
        components: ["V", "S", "M"],
        description: "A protective spell that creates a magical barrier around the target, increasing their AC."
    },
    {
        name: "Invisibility",
        level: 2,
        school: "Illusion",
        components: ["V", "S"],
        description: "A spell that renders the target invisible, allowing them to move unseen."
    },
    {
        name: "Lightning Bolt",
        level: 3,
        school: "Evocation",
        components: ["V", "S", "M"],
        description: "A spell that unleashes a bolt of lightning, dealing damage to enemies in a straight line."
    },
    {
        name: "Healing Word",
        level: 1,
        school: "Evocation",
        components: ["V"],
        description: "A spell that allows the caster to heal a creature within range."
    },
    {
        name: "Shield",
        level: 1,
        school: "Abjuration",
        components: ["V", "S"],
        description: "A spell that creates an invisible barrier of magical force, increasing the caster's AC until the start of their next turn." 
    },
    {
        name: "Fly",
        level: 3,
        school: "Transmutation",
        components: ["V", "S", "M"],
        description: "A spell that grants the ability to fly for a limited duration."
    },
    {
        name: "Counterspell",
        level: 3,
        school: "Abjuration",
        components: ["S"],
        description: "A spell that allows the caster to interrupt another spell being cast, potentially negating its effects."
    },
    {
        name: "Detect Magic",
        level: 1,
        school: "Divination",
        components: ["V", "S"],
        description: "A spell that allows the caster to sense the presence of magic within a certain area."
    },
    {
        name: "Summon Elemental",
        level: 4,
        school: "Conjuration",  
        components: ["V", "S", "M"],
        description: "A spell that allows the caster to summon an elemental creature to fight on their behalf."
    }
];

const spellBody = document.querySelector('#spellTable tbody');
const searchInput = document.querySelector('#searchInput');

function displaySpells(spells) {
    spellBody.innerHTML = '';

    if (spells.length === 0) {
        spellBody.innerHTML = '<tr><td colspan="5">No spells found.</td></tr>';
        return;
    }

    spells.forEach(spell => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${spell.name}</td>
            <td>${spell.level}</td>
            <td>${spell.school}</td>
            <td>${spell.components.join(', ')}</td>
            <td>${spell.description}</td>
        `;
        spellBody.appendChild(row);
    });
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredSpells = spells.filter(spell => 
        spell.name.toLowerCase().includes(query) ||
        spell.school.toLowerCase().includes(query) ||
        spell.components.some(component => component.toLowerCase().includes(query)) ||
        spell.description.toLowerCase().includes(query) ||
        spell.level.toString().includes(query)
    );
    displaySpells(filteredSpells);
    });
displaySpells(spells);



