export class SearchObject {
  blocks: Array<string>;
  maps: Array<string>;
  documents: Array<string>;
  constructor(obj) {
    this.blocks = obj.blocks;
    this.maps = obj.maps;
    this.documents = obj.documents;
  }
}
