import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TechNode } from './models/tech-node';

@Injectable({
  providedIn: 'root'
})
export class AddNodesService {

  constructor(private http: HttpClient) {}

 
  parseNodesFromJSONFile(filePath: string): Observable<TechNode[]> {
    return this.http.get(filePath).pipe(
      map((jsonData: any) => this.parseNodes(jsonData))
    );
  }

  private parseNodes(jsonData: any): TechNode[] {
    const nodes: TechNode[] = [];

    //console.log(jsonData);

    function parseNode(jsonNode: any): TechNode {
      const node = new TechNode(jsonNode.name);

      for(const perk of jsonNode.perks) {
        node.addPerk(perk);
      }

      if (jsonNode.childs && jsonNode.childs.length > 0) {
        for (const child of jsonNode.childs) {
          const childNode = parseNode(child);
          childNode.setParent(node);
          node.addChild(childNode);
        }
      }

      return node;
    }

    if (jsonData && jsonData.length > 0) {
      for (const jsonNode of jsonData) {
        const node = parseNode(jsonNode);
        nodes.push(node);
      }
    }

    return nodes;
  }
}