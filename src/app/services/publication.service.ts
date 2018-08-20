import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PublicationService {
  host: string;
  api: string;
  private publicationSource = new BehaviorSubject<any>(null);
  currentPublication = this.publicationSource.asObservable();

  constructor(private http: HttpClient) {
    this.api = 'api/im-documents/';
  }
  getPublication(id) {
    return this.http.get(this.api + id)
      .map(query_result =>  {
        this.publicationSource.next(this.generageHTML(query_result));
      });
  }
  setFirstPublication(id) {
    this.http.get(this.api + id)
      .subscribe(query_result =>  {
        this.publicationSource.next(this.generageHTML(query_result));
      });
  }
  getFsprodocument(doc) {
    const parser = new DOMParser();
    return parser.parseFromString(doc.originalXml, 'text/html');
  }

  generageHTML (xml) {
    const newHtml = this.getFsprodocument(xml);
    xml.htmlContent = this.analysegeneratedHtml(newHtml)[0];
    return xml;
  }

  analysegeneratedHtml (_html) {
    let html = _html.body;
    let headerrowList = html.getElementsByTagName('headerrow');
    for (let headeEl of headerrowList) {
      let elementParent = headeEl.parentNode;
      let newTr = document.createElement('tr');
      this.copyAttributes(headeEl, newTr);

      let cellList = headeEl.getElementsByTagName('cell');
      for (let cellEl of cellList) {
        let newTh = document.createElement('th');
        this.copyAttributes(cellEl, newTh);
        this.copyChilds(cellEl, newTh);
        newTr.appendChild(newTh);
      }
      let newThead = document.createElement('thead');
      newThead.appendChild(newTr);
      let newTable = document.createElement('table');
      newTable.appendChild(newThead);

      let newTbody = document.createElement('tbody');
      let rowList = elementParent.getElementsByTagName('row');
      for ( let rowEl of rowList) {
        let newInnerTr = document.createElement('tr');
        this.copyAttributes(rowEl, newInnerTr);

        let innerCellList = rowEl.getElementsByTagName('cell');
        for (let innerCellItem of innerCellList) {
          let newInnerTd = document.createElement('td');
          this.copyAttributes(innerCellItem, newInnerTd);
          this.copyChilds(innerCellItem, newInnerTd);
          newInnerTr.appendChild(newInnerTd);
        }

        newTbody.appendChild(newInnerTr);
        }
      newTable.appendChild(newTbody);

      elementParent.appendChild(newTable);
    }
    return this.toActualHTML(html);
  }

  toActualHTML (htmlDoc) {
    return htmlDoc.getElementsByTagName('fsprodocument');
  }

  copyChilds(oldNode, newNode) {
    if(oldNode.children.length){
      let origilanChildren = oldNode.children;

      let a;
      for (a = origilanChildren.length; a > 0; a--) {
        newNode.appendChild(origilanChildren[a - 1]);
      }
    }
  }

  copyAttributes (oldNode, newNode) {
    if (oldNode.attributes.length) {
      for (let i = oldNode.attributes.length; i > 0 ; i--) {
        newNode.setAttribute(oldNode.attributes[i - 1].name, oldNode.attributes[i-1].value)
      }
    }
  }
}
