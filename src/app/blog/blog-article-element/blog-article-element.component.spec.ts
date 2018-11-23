import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleElementComponent } from './blog-article-element.component';

describe('BlogArticleElementComponent', () => {
  let component: BlogArticleElementComponent;
  let fixture: ComponentFixture<BlogArticleElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArticleElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
