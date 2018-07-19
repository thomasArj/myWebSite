import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesProjetsComponent } from './mes-projets.component';

describe('MesProjetsComponent', () => {
  let component: MesProjetsComponent;
  let fixture: ComponentFixture<MesProjetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesProjetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
