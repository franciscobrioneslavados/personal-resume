import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  collectionName = 'about';
  documentName = 'FCtA7KtvfPGsihOPOuJa';

  constructor(private firestore: AngularFirestore) {}

  public getAboutList(): Observable<any> {
    return this.firestore
      .collection(this.collectionName)
      .doc(this.documentName)
      .valueChanges();
  }
}
