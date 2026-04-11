/**
 * Selects the element with the id 'main-heading' and changes its text content to 'DOM Manipulation Challenge'.
 */
function changeHeadingText() {
  // TODO:
  const heading = document.getElementById('main-heading');
  heading.textContent = 'DOM Manipulation Challenge';
}
}

/**
 * Selects the element with the id 'box-to-modify' and changes its background color to 'lightblue'.
 */
functionchangeBoxColor() {
  // TODO:  
  const box = document.getElementById('box-to-modify');
  box.style.backgroundColor = 'lightblue';
}

/**
 * Creates a new <li> element, sets its text content to 'New Item', and appends it to the <ul> with the id 'item-list'.
 */
functionaddNewItem() {
  // TODO:
   const  newuli= document.creatElment('li');
  newli.textContent = 'New Item';
  const list = document.getElmentById('item-list')
  list.appendChild(newLi);
}
 

/**
 * Selects the paragraph with the class 'content-para' and adds the class 'highlight' to it.
 */
functionhighlightParagraph() {
  // TODO:
  const para= document.querySelector('.content-para');
  para.classList.add('highlight');
}

/**
 * Selects the element with the id 'to-be-removed' and removes it from the DOM.
 */
functionremoveElement() {
  // TODO: 
  const element = document.getElementById('to-be-removed');
 if (element) {
    element.remove();
  }
}


// Do not edit the lines below.
// These lines are for testing purposes.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeHeadingText,
        changeBoxColor,
        addNewItem,
        highlightParagraph,
        removeElement
    };
}

