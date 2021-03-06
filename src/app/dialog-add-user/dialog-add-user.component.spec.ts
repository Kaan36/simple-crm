import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


import { DialogAddUserComponent } from './dialog-add-user.component';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule],
      declarations: [ DialogAddUserComponent],
      providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}, { 
        provide: MatDialogRef,
        useValue: []
         }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
