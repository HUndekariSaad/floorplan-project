import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMasterComponent } from './home-master.component';

describe('HomeMasterComponent', () => {
  let component: HomeMasterComponent;
  let fixture: ComponentFixture<HomeMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
