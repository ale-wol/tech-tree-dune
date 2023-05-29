export class TechNode {
    name: String;
    public perks: String [] = [];
    public childs: TechNode[] = [];
    private parentNode?: TechNode;
  
    constructor(name: String) {
      this.name = name;
    }

    addPerk(perk: String){
      this.perks.push(perk);
    }

    getPerks(): String[] {
      return this.perks;
    }
  
    addChild(child: TechNode): void {
      this.childs.push(child);
    }
  
    getchilds(): TechNode[] {
      return this.childs;
    }

    getParent(){
        return this.parentNode;
    }

    setParent(parent: TechNode){
        this.parentNode = parent;
    }
  }