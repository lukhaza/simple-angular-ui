import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutingsComponent } from './app-routings.component';

describe('AppRoutingsComponent', () => {
  let component: AppRoutingsComponent;
  let fixture: ComponentFixture<AppRoutingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRoutingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRoutingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
