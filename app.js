document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'falcon',
            img: 'img/falcon.svg'
        },
        {
            name: 'falcon',
            img: 'img/falcon.svg'
        },
        {
            name: 'giraffe',
            img: 'img/giraffe.svg'
        },
        {
            name: 'giraffe',
            img: 'img/giraffe.svg'
        },
        {
            name: 'lion',
            img: 'img/lion.svg'
        },
        {
            name: 'lion',
            img: 'img/lion.svg'
        },
        {
            name: 'panther',
            img: 'img/panther.svg'
        },
        {
            name: 'panther',
            img: 'img/panther.svg'
        },
        {
            name: 'rhyno',
            img: 'img/rhyno.svg'
        },
        {
            name: 'rhyno',
            img: 'img/rhyno.svg'
        },
        {
            name: 'wolf',
            img: 'img/wolf.svg'
        },
        {
            name: 'wolf',
            img: 'img/wolf.svg'
        },
        {
            name: 'gorilla',
            img: 'img/gorilla.svg'
        },
        {
            name: 'gorilla',
            img: 'img/gorilla.svg'
        },
        {
            name: 'fox',
            img: 'img/fox.svg'
        },
        {
            name: 'fox',
            img: 'img/fox.svg'
        },
        {
            name: 'owl',
            img: 'img/owl.svg'
        },
        {
            name: 'owl',
            img: 'img/owl.svg'
        },
        {
            name: 'white-panther',
            img: 'img/white-panther.svg'
        },
        {
            name: 'white-panther',
            img: 'img/white-panther.svg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const attempt = document.querySelector('#attempt')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var attempts = 0

    //create your board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'img/back.svg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            //alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/blank.svg')
            cards[optionTwoId].setAttribute('src', 'img/blank.svg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/back.svg')
            cards[optionTwoId].setAttribute('src', 'img/back.svg')
            //alert('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulation! You found them all!'
        }

        attempts += 1
        attempt.textContent = attempts
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})
