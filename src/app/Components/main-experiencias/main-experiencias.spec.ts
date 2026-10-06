import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainExperiencias } from './main-experiencias';

describe('MainExperiencias', () => {
  let component: MainExperiencias;
  let fixture: ComponentFixture<MainExperiencias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainExperiencias],
    }).compileComponents();

    fixture = TestBed.createComponent(MainExperiencias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
