import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcocoComponent } from './hcoco.component';

describe('HcocoComponent', () => {
  let component: HcocoComponent;
  let fixture: ComponentFixture<HcocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
