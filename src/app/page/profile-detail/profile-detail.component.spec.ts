import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListProfilesComponent } from './profile-detail.component';

describe('ListProfilesComponent', () => {
  let component: ListProfilesComponent;
  let fixture: ComponentFixture<ListProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProfilesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
