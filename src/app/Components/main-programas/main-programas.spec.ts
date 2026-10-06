import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainProgramas } from './main-programas';

describe('MainProgramas', () => {
  let component: MainProgramas;
  let fixture: ComponentFixture<MainProgramas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProgramas],
    }).compileComponents();

    fixture = TestBed.createComponent(MainProgramas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
