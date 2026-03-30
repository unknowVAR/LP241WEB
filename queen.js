const menuData = {
    entrees: [
        { name: "Salade Verte", desc: "Simple et frais", price: 2500 },
        { name: "Accras de Morue", desc: "Croustillants (6 pcs)", price: 3500 },
        { name: "Carpaccio de Bœuf", desc: "Fines tranches marinées", price: 5000 }
    ],
    pizza: [
        { name: "Marguerita", desc: "Tomate, Mozzarella, Basilic", price: 5000 },
        { name: "Reine", desc: "Jambon, Champignons", price: 6500 },
        { name: "4 Fromages", desc: "Mélange onctueux de fromages", price: 7500 },
        { name: "Queen Mary Spéciale", desc: "Fruits de mer, ail, persillade", price: 9000 }
    ],
    burgers: [
        { name: "Classic Burger", desc: "Bœuf, salade, tomate", price: 4500 },
        { name: "Cheese Burger", desc: "Double cheddar", price: 5500 },
        { name: "Burger Forestier", desc: "Sauce champignons maison", price: 7000 }
    ],
    desserts: [
        { name: "Salade de fruits", desc: "Fruits de saison du Gabon", price: 2000 },
        { name: "Crêpe au chocolat", desc: "Chocolat fondu", price: 3000 },
        { name: "Fondant au Chocolat", desc: "Cœur coulant, glace vanille", price: 4500 }
    ],
    boissons: [
        { name: "Eau Minérale", desc: "1.5L", price: 1000 },
        { name: "Sodas", desc: "33cl (Coca, Fanta, Sprite)", price: 1500 },
        { name: "Jus Local (Bissap/Foléré)", desc: "Fait maison", price: 2000 },
        { name: "Cocktail Queen", desc: "Mélange exotique sans alcool", price: 3500 }
    ]
};

function filterMenu(category) {
    const container = document.getElementById('menu-container');
    const buttons = document.querySelectorAll('.tab-btn');
    
    // Mise à jour de l'état actif des boutons
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category.substring(0,3))) {
            btn.classList.add('active');
        }
    });

    // Génération du HTML
    const items = menuData[category];
    container.innerHTML = items.map(item => `
        <div class="card">
            <div class="card-info">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
            </div>
            <div class="price">${item.price.toLocaleString()} FCFA</div>
        </div>
    `).join('');
}

// Charger les entrées par défaut au démarrage
window.onload = () => filterMenu('entrees');