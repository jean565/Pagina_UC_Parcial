import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderMatricula } from './header-matricula';

describe('HeaderMatricula', () => {
  let component: HeaderMatricula;
  let fixture: ComponentFixture<HeaderMatricula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMatricula],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderMatricula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
