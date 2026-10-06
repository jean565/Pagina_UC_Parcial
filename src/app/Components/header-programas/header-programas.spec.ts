import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderProgramas } from './header-programas';

describe('HeaderProgramas', () => {
  let component: HeaderProgramas;
  let fixture: ComponentFixture<HeaderProgramas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderProgramas],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderProgramas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
