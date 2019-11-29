import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherDetailsPage } from './weather-details.page';

describe('WeatherDetailsPage', () => {
  let component: WeatherDetailsPage;
  let fixture: ComponentFixture<WeatherDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
