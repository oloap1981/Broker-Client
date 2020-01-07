import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportGeneralePage } from './client-report-generale.page';

describe('ClientReportGeneralePage', () => {
  let component: ClientReportGeneralePage;
  let fixture: ComponentFixture<ClientReportGeneralePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportGeneralePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportGeneralePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
