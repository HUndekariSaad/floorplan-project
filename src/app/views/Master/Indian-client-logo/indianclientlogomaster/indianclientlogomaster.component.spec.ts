import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianclientlogomasterComponent } from './indianclientlogomaster.component';

describe('IndianclientlogomasterComponent', () => {
  let component: IndianclientlogomasterComponent;
  let fixture: ComponentFixture<IndianclientlogomasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianclientlogomasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianclientlogomasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
