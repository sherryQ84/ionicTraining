import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeathersPage } from './weathers.page';

describe('WeathersPage', () => {
  let component: WeathersPage;
  let fixture: ComponentFixture<WeathersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeathersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
