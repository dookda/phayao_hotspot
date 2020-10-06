import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambonPage } from './tambon.page';

describe('TambonPage', () => {
  let component: TambonPage;
  let fixture: ComponentFixture<TambonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
