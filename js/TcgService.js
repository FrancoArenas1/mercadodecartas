// TcgService.js
class TcgService {
    constructor() {
      this.games = [{name: 'magic',
                     url: "productos.html?producto=mtg"
                        }, {name: 'pokemon',
                        url: "productos.html?producto=pkm"
                           }, {name: 'one-piece',
                           url: "productos.html?producto=onepiece"
                              }, {name: 'dbz',
                              url: "productos.html?producto=dbz"
                                 }];
    }
  
    getGames() {
      return this.games;
    }
  }