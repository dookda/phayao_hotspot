import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmphoePage } from './amphoe.page';

describe('AmphoePage', () => {
  let component: AmphoePage;
  let fixture: ComponentFixture<AmphoePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmphoePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmphoePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
