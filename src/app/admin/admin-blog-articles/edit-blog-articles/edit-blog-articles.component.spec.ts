import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogArticlesComponent } from './edit-blog-articles.component';

describe('EditBlogArticlesComponent', () => {
  let component: EditBlogArticlesComponent;
  let fixture: ComponentFixture<EditBlogArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBlogArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlogArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
