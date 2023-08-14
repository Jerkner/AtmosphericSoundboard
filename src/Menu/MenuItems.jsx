// Import the necessary modules
import React from 'react';

// Define an array of menu items grouped by categories
const menuItemsData = [
    {
        group: 1,
        items: [
            { theme: 'Amazon', alt: 'Amazon Theme', image: '../assets/amazon-tn.jpg' },
            { theme: 'Park', alt: 'Park Theme', image: '../assets/park-tn.jpg' },
        ],
    },
    {
        group: 2,
        items: [
            { theme: 'Harbor', alt: 'Harbor Theme', image: '../assets/harbor-tn.jpg' },
            { theme: 'ZenGarden', alt: 'Zen Garden Theme', image: '../assets/zengarden-tn.jpg' },
        ],
    },
];

// Define the MenuItems component
export default function MenuItems(props) {
    // Render the menu items based on the menuItemsData array
    return (
        <main className="menu-items-container">
            {menuItemsData.map(group => (
                <div key={group.group} className="menu-group">
                    {group.items.map(item => (
                        <img
                            key={item.theme}
                            className="menu-tn"
                            src={item.image}
                            onClick={() => props.handleItemClick(item.theme)} // Call the handleItemClick function from props
                            alt={item.alt}
                        />
                    ))}
                </div>
            ))}
        </main>
    );
}
