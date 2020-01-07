import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportGeneraleAttiviPage } from './client-report-generale-attivi.page';

describe('ClientReportGeneraleAttiviPage', () => {
  let component: ClientReportGeneraleAttiviPage;
  let fixture: ComponentFixture<ClientReportGeneraleAttiviPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportGeneraleAttiviPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportGeneraleAttiviPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
