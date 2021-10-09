import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverteMoedasComponent } from './converte-moedas.component';

describe('ConverteMoedasComponent', () => {
  let component: ConverteMoedasComponent;
  let fixture: ComponentFixture<ConverteMoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverteMoedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverteMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
