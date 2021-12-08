import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DialogEditUserComponent } from './dialog-edit-user.component';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, RouterTestingModule.withRoutes([]), AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule],
      declarations: [ DialogEditUserComponent, DialogEditUserComponent],
      providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, { 
        provide: MatDialogRef,
        useValue: []
         }],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
