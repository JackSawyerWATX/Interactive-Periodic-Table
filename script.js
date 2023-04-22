const elements = document.querySelectorAll('.element');
const elementDetails = document.getElementById('element-details');
const elementDetailsSymbol = document.querySelector('.element-details-symbol');
const elementDetailsName = document.querySelector('.element-details-name');
const elementDetailsAtomicNumber = document.querySelector('.element-details-atomic-number');
const elementDetailsAtomicWeight = document.querySelector('.element-details-atomic-weight');
const elementDetailsDescription = document.querySelector('.element-details-description');

function showElementDetails(symbol, name, atomicNumber, atomicWeight, description) {
    elementDetailsSymbol.innerText = symbol;
    elementDetailsName.innerText = name;
    elementDetailsAtomicNumber.innerText = `Atomic Number: ${atomicNumber}`;
    elementDetailsAtomicWeight.innerText = `Atomic Weight: ${atomicWeight}`;
    elementDetailsDescription.innerText = description;
    elementDetails.style.display = 'block';
}

function hideElementDetails() {
    elementDetails.style.display = 'none';
}

elements.forEach(element => {
    element.addEventListener('mouseover', () => {
        const symbol = element.innerText;
        const name = element.dataset.name;
        const atomicNumber = element.dataset.atomicNumber;
        const atomicWeight = element.dataset.atomicWeight;
        const description = element.dataset.description;
        showElementDetails(symbol, name, atomicNumber, atomicWeight, description);
    });

    element.addEventListener('mouseout', () => {
        hideElementDetails();
    });
});

elementDetails.addEventListener('click', () => {
    hideElementDetails();
});
