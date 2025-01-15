import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarrelDropdownComponent } from './barrel-dropdown.component';

describe('BarrelDropdownComponent', () => {
  let component: BarrelDropdownComponent;
  let fixture: ComponentFixture<BarrelDropdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BarrelDropdownComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BarrelDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
