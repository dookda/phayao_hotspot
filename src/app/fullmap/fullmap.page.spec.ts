import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullmapPage } from './fullmap.page';

describe('FullmapPage', () => {
  let component: FullmapPage;
  let fixture: ComponentFixture<FullmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
