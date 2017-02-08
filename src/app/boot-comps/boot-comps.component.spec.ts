/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BootCompsComponent } from './boot-comps.component';

describe('BootCompsComponent', () => {
  let component: BootCompsComponent;
  let fixture: ComponentFixture<BootCompsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootCompsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
