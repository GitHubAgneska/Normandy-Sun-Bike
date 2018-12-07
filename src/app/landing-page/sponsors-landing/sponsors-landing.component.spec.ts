import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsLandingComponent } from './sponsors-landing.component';

describe('SponsorsLandingComponent', () => {
  let component: SponsorsLandingComponent;
  let fixture: ComponentFixture<SponsorsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
