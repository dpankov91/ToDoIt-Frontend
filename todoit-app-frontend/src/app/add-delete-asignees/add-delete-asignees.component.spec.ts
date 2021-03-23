import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeleteAsigneesComponent } from './add-delete-asignees.component';

describe('AddDeleteAsigneesComponent', () => {
  let component: AddDeleteAsigneesComponent;
  let fixture: ComponentFixture<AddDeleteAsigneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeleteAsigneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeleteAsigneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
