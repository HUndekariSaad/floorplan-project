import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusDrawerComponent } from './contactus-drawer.component';

describe('ContactusDrawerComponent', () => {
  let component: ContactusDrawerComponent;
  let fixture: ComponentFixture<ContactusDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactusDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
