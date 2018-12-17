import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogArticlesComponent } from './admin-blog-articles.component';

describe('AdminBlogArticlesComponent', () => {
  let component: AdminBlogArticlesComponent;
  let fixture: ComponentFixture<AdminBlogArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
