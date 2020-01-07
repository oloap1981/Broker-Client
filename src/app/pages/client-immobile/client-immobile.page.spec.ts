import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientImmobilePage } from './client-immobile.page';

describe('ClientImmobilePage', () => {
  let component: ClientImmobilePage;
  let fixture: ComponentFixture<ClientImmobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientImmobilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientImmobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
