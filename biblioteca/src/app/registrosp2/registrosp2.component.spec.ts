import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrosp2Component } from './registrosp2.component';

describe('Registrosp2Component', () => {
  let component: Registrosp2Component;
  let fixture: ComponentFixture<Registrosp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registrosp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registrosp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
