import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogArticleComponent } from './add-blog-article.component';

describe('AddBlogArticleComponent', () => {
  let component: AddBlogArticleComponent;
  let fixture: ComponentFixture<AddBlogArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBlogArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlogArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
