// TcgListComponent.js
class TcgListComponent {
    constructor(tcgService) {
      this.tcgService = tcgService;
      this.games = [];
    }
  
    ngOnInit() {
      this.games = this.tcgService.getGames();
    }
  }