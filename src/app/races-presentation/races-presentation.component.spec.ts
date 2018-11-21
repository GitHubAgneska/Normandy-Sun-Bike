import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesPresentationComponent } from './races-presentation.component';

describe('RacesPresentationComponent', () => {
  let component: RacesPresentationComponent;
  let fixture: ComponentFixture<RacesPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
