import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDrawerComponent } from './client-drawer.component';

describe('ClientDrawerComponent', () => {
  let component: ClientDrawerComponent;
  let fixture: ComponentFixture<ClientDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
