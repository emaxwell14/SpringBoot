
import {OnInit} from '@angular/core'
import { Note } from './note';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// TODO Replace with real server call
export const NOTES: Note[] = [
  {id: 11, name: 'Shopping', body: 'Fish, Chips'},
  {id: 12, name: 'Movies', body:  'Scarface, Star Wars'},
  {id: 13, name: 'TV', body:  'South Park, Futurama, The Wire'},
  {id: 14, name: 'TODO', body: 'Gym, Clothes'},
  {id: 15, name: 'Other', body:'blah blah'}
];

@Injectable()
export class NoteService {
  // Represents the class sending
  noteChange: Observable<Note>;

  // Represents the class receiving
  private observer: Observer<Note>;

  /**
   * Sets up event for when the selected note changes
   */
  constructor(private http: Http) {
     // share() allows multiple subscribers
    this.noteChange = new Observable(observer =>
      this.observer = observer).share();
  }

  /**
  * Return the list of notes for the list
  */
  getNotes() : Observable<Note[]> {
    return this.http
               .get(`/notes`)
               // TODO Try
              // .map(response => response.json().data as Note[]);
            //   .switchMap(response => this.rawSearch(response));
               .map((response) => response.json());
    // return NOTES;
  }
  /**
   * When the selected note changes, tell subscribers
   */
  changeSelectedNote(note: Note) {
    this.observer.next(note);
  }

  updateNote(note: Note): Observable<Note> {
    // TODO Will this update the note in the list?
    // Not doing anything with the return type currently
    const url = `/notes/${note.id}`;
    return this.http
      .post(url, JSON.stringify(note))
      .map(response => response.json().data as Note);
  }
}
