import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDrawerComponent } from './service-drawer.component';

describe('ServiceDrawerComponent', () => {
  let component: ServiceDrawerComponent;
  let fixture: ComponentFixture<ServiceDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
