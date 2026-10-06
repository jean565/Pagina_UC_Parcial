import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMatricula } from './main-matricula';

describe('MainMatricula', () => {
  let component: MainMatricula;
  let fixture: ComponentFixture<MainMatricula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMatricula],
    }).compileComponents();

    fixture = TestBed.createComponent(MainMatricula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
