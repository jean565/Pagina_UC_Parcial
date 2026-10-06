import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainDocentes } from './main-docentes';

describe('MainDocentes', () => {
  let component: MainDocentes;
  let fixture: ComponentFixture<MainDocentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDocentes],
    }).compileComponents();

    fixture = TestBed.createComponent(MainDocentes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
