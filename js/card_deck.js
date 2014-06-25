
  function Deck() {
    this.cards = [];
    this.player1 = [];
    this.player2 = [];
    this.p1Text = "";
    this.p2Text = "";
    
    this.count = function() {
      return this.cards.length;
    }
    this.init = function() {
      suit = ["spades", "clubs", "hearts", "diamonds"];
      for (s = 0; s <= 3; s++) {
        for (r = 1; r <= 13; r++) {
          this.cards.push(new Card(r, suit[s]));
        }
      }
    }
    this.printDeck = function() {
        cards = this.cards;
        text = "";
        
        for (i = 0; i < cards.length; i++) { 
         text += cards[i].rank + " " + cards[i].suit + "\n";
        }
        return text;
    }
    
    this.deal = function() {
        cards = this.cards;
        
        for(i=0; i < 10; i=i+2) {
            this.player1.push(cards[i]);
            this.player2.push(cards[i+1]);
        }
    }
    
    this.shuffle = function(n) {
      var i, j, k;
      var temp;

        for (i = 0; i < n; i++)
        for (j = 0; j < this.cards.length; j++)
        {
          k = Math.floor(Math.random() * this.cards.length);
          temp = this.cards[j];
          this.cards[j] = this.cards[k];
          this.cards[k] = temp;
        }
    }
    
    this.printHands = function() {
        text = "";
        text += "{"
        for(i=0; i < this.player1.length; i++) {
            text += "[";
            text +=  this.player1[i].rank + " " + this.player1[i].suit;
            text += "]";
        }
        text += "}" + "{";
        for(i=0; i < this.player2.length; i++) {
            text += "[";
            text +=  this.player2[i].rank + " " + this.player1[i].suit;
            text += "]";
        }
        text += "}";
        
        return text;
    }
    
  }
 
  function Card(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.show = function() {
      console.log(this.rank + " of " + this.suit);
    }
  }
 
  d = new Deck();
  d.init();
  alert(d.printDeck());
  d.shuffle(7);
  alert(d.printDeck());
  d.deal();
  alert(d.printHands());
  
  $("button#reveal-cards").on("click", d.reveal);
  
  
