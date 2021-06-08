import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import firebase from 'firebase/app'
import 'firebase/auth';        // for authentication


@Injectable()
export class AuthService {

  static logInAnonymously() {
    return firebase.auth().signInAnonymously();
  }

  public onAuthStateChanged(cb:any) {
    firebase.auth().onAuthStateChanged(cb);
  }

  public logInEmailAndPassword(email:string, password:string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  public getTokenId() {
    return firebase.auth().currentUser!.getIdToken(false);
  }

  public changePassword(password:string) {
    return firebase.auth().currentUser!.updatePassword(password)
  }

  public resetPassword(email:string) {
    return firebase.auth().sendPasswordResetEmail(email).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  public logOut() {
    return firebase.auth().signOut();
  }

}
