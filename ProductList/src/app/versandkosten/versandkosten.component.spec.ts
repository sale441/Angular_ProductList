import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersandkostenComponent } from './versandkosten.component';

describe('VersandkostenComponent', () => {
  let component: VersandkostenComponent;
  let fixture: ComponentFixture<VersandkostenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersandkostenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersandkostenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
