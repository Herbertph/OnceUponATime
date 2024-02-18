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

 
    // Evento de clique para o botão "V"
document.querySelector('.button-container:last-child button:first-child').addEventListener('click', () => {
  // Verifica se todas as seleções foram feitas
  const selectedClass = document.querySelectorAll('.button-container')[0].querySelector('.button:not([style="display: none;"])');
  const selectedItem = document.querySelectorAll('.button-container')[1].querySelector('.button:not([style="display: none;"])');
  const selectedToSave = document.querySelectorAll('.button-container')[2].querySelector('.button:not([style="display: none;"])');

  if (selectedClass && selectedItem && selectedToSave) {
    const requestData = {
      'selected_class': selectedClass.textContent,
      'selected_item': selectedItem.textContent,
      'selected_to_save': selectedToSave.textContent
    };

    // Envia uma solicitação POST para o servidor Flask
    fetch('http://127.0.0.1:5000/gerar_historia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
      // Limpa o conteúdo da div "celular"
      document.querySelector('.celular').innerHTML = '';
      // Exibe a história gerada na sua página
      document.querySelector('.celular').innerHTML += `<p>${data.story}</p>`;
    })
    .catch(error => console.error('Error:', error));
  } else {
    // Exibe uma mensagem para o usuário fazer todas as seleções antes de continuar
    alert('Por favor, faça todas as seleções antes de gerar a história.');
  }
});
});
