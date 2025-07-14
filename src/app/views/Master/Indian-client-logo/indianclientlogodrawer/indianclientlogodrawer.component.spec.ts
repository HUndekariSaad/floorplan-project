import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianclientlogodrawerComponent } from './indianclientlogodrawer.component';

describe('IndianclientlogodrawerComponent', () => {
  let component: IndianclientlogodrawerComponent;
  let fixture: ComponentFixture<IndianclientlogodrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianclientlogodrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianclientlogodrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
