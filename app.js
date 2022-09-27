window.addEventListener("DOMContentLoaded" , function (){
    let cardArray = [
        {
          name: 'fries',
          img: 'img/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'img/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'img/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'img/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'img/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'img/hotdog.png'
        },
        {
          name: 'fries',
          img: 'img/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'img/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'img/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'img/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'img/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'img/hotdog.png'
        }
      ]

      cardArray.sort(()=> 0.5 - Math.random())
      let cardChosen = []
      let cardChosenId = []
      let counter = []
      let container = document.querySelector(".flex")

      function createBoard () {
        for(let i  = 0 ; i < cardArray.length ; i++) {
            let imag = document.createElement("img")
            imag.setAttribute("src" , "img/blank.png")
            imag.setAttribute("data-id" , i)
            imag.setAttribute("class" , "item")
            imag.addEventListener("click" , selectImg)
            container.append(imag)
        }
      }

      function selectImg () {
        let cardId = this.getAttribute("data-id")
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute("src" , cardArray[cardId].img)
        
        if(cardChosenId.length === 2) {
            setTimeout(() => {
              gameLogic()
          }, 500);
        }
      }

      function gameLogic () {
        let selectOne = cardChosenId[0]
        let selectTwo = cardChosenId[1]
        let items = document.querySelectorAll("img")

        if(selectOne == selectTwo) {
            alert("select same image! try again!")            
            items[selectOne].setAttribute("src" , "img/blank.png")
            items[selectTwo].setAttribute("src" , "img/blank.png")
        }else if(cardChosen[0] === cardChosen[1] ) {
            items[selectOne].setAttribute("src" , "img/white.png")
            items[selectTwo].setAttribute("src" , "img/white.png")
            items[selectOne].removeEventListener("click" , selectImg)
            items[selectTwo].removeEventListener("click" , selectImg)
            counter.push(1)
            alert(" you're ge genius!")
        }else {
            items[selectOne].setAttribute("src" , "img/blank.png")
            items[selectTwo].setAttribute("src" , "img/blank.png")
            alert(" Noooo! ):")
        }
        if(counter.length === 6 ) {
          let div = document.createElement("div")
          div.classList.add("text")
          document.querySelector("body").append(div)
          div.innerText = "You Are Genius"
          setTimeout(()=>{
            window.location.reload()
          },2000)
        }
        document.querySelector("p").innerText ="score : " +  counter.length
        cardChosen = []
        cardChosenId = []
      }
      createBoard()
})