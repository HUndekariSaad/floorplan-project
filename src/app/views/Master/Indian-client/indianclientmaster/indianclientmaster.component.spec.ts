import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianclientmasterComponent } from './indianclientmaster.component';

describe('IndianclientmasterComponent', () => {
  let component: IndianclientmasterComponent;
  let fixture: ComponentFixture<IndianclientmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianclientmasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianclientmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
