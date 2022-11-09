var cards = document.querySelectorAll('.card')

for (var i = 0; i < cards.length; i++) {
    let card = cards[i]
    card.addEventListener('mouseenter', () => {
        document.querySelectorAll('.card.active').forEach(element => {
            element.classList.remove("active")
        })
        card.classList.add('active')
    })
}

// for (var i = 0; i < cards.length; i++) {
//     let card = cards[i]
//     // console.log(card)
//     card.addEventListener('mouseenter', () => {
//         document.querySelectorAll('.card.active').forEach(element => {
//             element.classList.remove("active")
//         })
//         card.classList.add('active')
//         card.querySelector('h1').classList.add('active')
//         card.querySelector('p').classList.add('active')
//         card.querySelector('icon-bg').classList.add('active')
//         // console.log(card.classList)
//     })
// }
