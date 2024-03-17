export class TechNode {
    name: string;
    isFaction: boolean;
    public perks: string [] = [];
    public childs: TechNode[] = [];
    private parentNode?: TechNode;
  
    constructor(name: string, isFaction: boolean) {
      this.name = name;
      this.isFaction = isFaction;
    }

    addPerk(perk: string){
      this.perks.push(perk);
    }

    getPerks(): string[] {
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