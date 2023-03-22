import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokioComponent } from './tokio.component';

describe('TokioComponent', () => {
  let component: TokioComponent;
  let fixture: ComponentFixture<TokioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
