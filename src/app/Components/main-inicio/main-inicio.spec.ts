import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainInicio } from './main-inicio';

describe('MainInicio', () => {
  let component: MainInicio;
  let fixture: ComponentFixture<MainInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainInicio],
    }).compileComponents();

    fixture = TestBed.createComponent(MainInicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
