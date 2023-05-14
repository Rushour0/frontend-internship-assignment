import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchTableViewComponent } from './paginator.component';

describe('SearchTableViewComponent', () => {
  let component: SearchTableViewComponent;
  let fixture: ComponentFixture<SearchTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchTableViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
