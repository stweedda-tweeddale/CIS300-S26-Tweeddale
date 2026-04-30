const items = [
    {
        name: "Bag of Holding",
        type: "Wondrous Item",
        attunement: "--",
        notes: "Utility, Container, Extra-dimensional space that can hold up to 500 pounds",
    },
    {
        name: "Cloak of Elvenkind",
        type: "Wondrous Item",
        attunement: "Required",
        notes: "Utility, Stealth, Advantage on Dexterity (Stealth) checks made to hide",
    },
    {
        name: "Boots of Speed",
        type: "Wondrous Item",
        attunement: "Required",
        notes: "Utility, Speed, Double your walking speed and gain advantage on Dexterity saving throws",
    },
    {
        name: "Gloves of Thievery",
        type: "Wondrous Item",
        attunement: "Required",
        notes: "Utility, Stealth, Gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks",
    },
    {
        name: "Ioun Stone of Awareness",
        type: "Wondrous Item",
        attunement: "Required",
        notes: "Utility, Awareness, While this pale blue rhomboid orbits your head, you can’t be surprised and have advantage on Wisdom (Perception) checks",
    },
    {
        name: "Pearl of Power",
        type: "Wondrous Item",
        attunement: "Required",
        notes: "Utility, Spellcasting, While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot of up to 3rd level (no more than once per day)",
    },
    {
        name: "Stone of Good Luck (Luckstone)",
        type: "Wondrous Item",
        attunement: "Required",
        notes: "Utility, Luck, Gain a +1 bonus to ability checks and saving throws while this polished agate is on your person",
    },
    {
        name: "Wand of Magic Missiles",
        type: "Wand",
        attunement: "Required",
        notes: "Utility, Spellcasting, This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Magic Missile spell from it",
    },
    {
        name: "Deck of Illusions",
        type: "Wondrous Item",
        attunement: "--",
        notes: "Utility, Illusion, This box contains a deck of cards that create illusions when drawn and thrown to the ground",
    }
];

const itemBody = document.querySelector('#itemTable tbody');
const searchInput = document.querySelector('#searchInput');

function displayItems(items) {
    itemBody.innerHTML = '';

    if (items.length === 0) {
        itembody.innerHTML = '<tr><td colspan="5">No items found.</td></tr>';
        return;
    }

    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.type}</td>
            <td>${item.attunement}</td>
            <td>${item.notes}</td>
        `;
        itemBody.appendChild(row);
    });
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        item.attunement.toLowerCase().includes(query) ||
        item.notes.toString().includes(query)
    );
    displayItems(filteredItems);
    });
displayItems(items);



