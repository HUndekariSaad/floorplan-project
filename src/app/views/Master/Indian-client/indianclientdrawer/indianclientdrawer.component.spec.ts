import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianclientdrawerComponent } from './indianclientdrawer.component';

describe('IndianclientdrawerComponent', () => {
  let component: IndianclientdrawerComponent;
  let fixture: ComponentFixture<IndianclientdrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndianclientdrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianclientdrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
