import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainNoticias } from './main-noticias';

describe('MainNoticias', () => {
  let component: MainNoticias;
  let fixture: ComponentFixture<MainNoticias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNoticias],
    }).compileComponents();

    fixture = TestBed.createComponent(MainNoticias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
