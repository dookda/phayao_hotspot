import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Report7dayPage } from './report7day.page';

describe('Report7dayPage', () => {
  let component: Report7dayPage;
  let fixture: ComponentFixture<Report7dayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report7dayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Report7dayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
