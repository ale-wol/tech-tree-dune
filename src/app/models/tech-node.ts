export class TechNode {
    name: String;
    description: String;
    public childs: TechNode[] = [];
    private parentNode?: TechNode;
  
    constructor(name: String, description: String) {
      this.name = name;
      this.description = description;
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