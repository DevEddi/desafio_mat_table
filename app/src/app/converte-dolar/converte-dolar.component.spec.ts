import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverteDolarComponent } from './converte-dolar.component';

describe('ConverteDolarComponent', () => {
  let component: ConverteDolarComponent;
  let fixture: ComponentFixture<ConverteDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverteDolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverteDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
