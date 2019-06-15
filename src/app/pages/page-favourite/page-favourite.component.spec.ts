import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFavouriteComponent } from './page-favourite.component';

describe('PageFavouriteComponent', () => {
  let component: PageFavouriteComponent;
  let fixture: ComponentFixture<PageFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
