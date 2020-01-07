import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportAnalisiPage } from './client-report-analisi.page';

describe('ClientReportAnalisiPage', () => {
  let component: ClientReportAnalisiPage;
  let fixture: ComponentFixture<ClientReportAnalisiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportAnalisiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportAnalisiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
