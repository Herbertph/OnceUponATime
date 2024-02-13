function setupButtonEvents(buttons) {
  Array.from(buttons).forEach(button => {
    button.addEventListener('click', function() {
      // Esconde os outros botões
      Array.from(buttons).forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.style.display = 'none';
        }
      });
      button.style.marginLeft = 'auto';
      button.style.marginRight = 'auto';
    });
  });
}




document.addEventListener('DOMContentLoaded', () => {
  const classes = ['Pirate', 'Gladiator', 'King', 'Wizard', 'Knight', 'Dragon', 'Elf', 'Dwarf', 'Sorcerer', 'Fairy'];
  const buttons = document.querySelectorAll('.button-container')[0].children; 
  const lookingFor = ['Crown', 'Sword', 'Helmet', 'Staff', 'Armor', 'Wings', 'Bow', 'Axe', 'Book', 'Wand'];
  const buttons2 = document.querySelectorAll('.button-container')[1].children; 
  const toSave = ['The princess' , 'The treasure', 'The kingdom', 'The magic', 'The honor', 'The dragon', 'The forest', 'The gold', 'The spell', 'The power']
  const buttonsToSave = document.querySelectorAll('.button-container')[2].children; 

  //Function to Randomize...
  function randomizeClasses() {
    const selectedClasses = [];
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * classes.length);
      if (!selectedClasses.includes(classes[index])) {
        selectedClasses.push(classes[index]);
      } else {
        i--; 
      }
    }
    return selectedClasses;
  }

  function randomizeItems() {
    const selectedItems = [];
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * lookingFor.length);
      if (!selectedItems.includes(lookingFor[index])) {
        selectedItems.push(lookingFor[index]);
      } else {
        i--; 
      }
    }
    return selectedItems;
  }

  function randomizeToSave() {
    const selectedToSave = [];
    for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * toSave.length);
      if (!selectedToSave.includes(toSave[index])) {
        selectedToSave.push(toSave[index]);
      } else {
        i--; 
      }
    }
    return selectedToSave;
  }

  const selectedClasses = randomizeClasses();
  const selectedItems = randomizeItems();
  const selectedToSave = randomizeToSave();

  // Assign to buttons
  selectedClasses.forEach((className, index) => {
    buttons[index].textContent = className;
  });

  selectedItems.forEach((itemName, index) => {
    buttons2[index].textContent = itemName;
  });

  selectedToSave.forEach((itemName, index) => {
    buttonsToSave[index].textContent = itemName;
  });

  // Atribui os textos aos botões e depois configura os eventos de clique
  selectedClasses.forEach((className, index) => {
    buttons[index].textContent = className;
  });
  setupButtonEvents(buttons); 

  selectedItems.forEach((itemName, index) => {
    buttons2[index].textContent = itemName;
  });
  setupButtonEvents(buttons2); 

  selectedToSave.forEach((itemName, index) => {
    buttonsToSave[index].textContent = itemName;
  });
  setupButtonEvents(buttonsToSave); 
});