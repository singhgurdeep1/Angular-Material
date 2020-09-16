import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LstnCardComponent } from './lstn-card.component';

describe('LstnCardComponent', () => {
  let component: LstnCardComponent;
  let fixture: ComponentFixture<LstnCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstnCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
