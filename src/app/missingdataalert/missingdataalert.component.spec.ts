import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingdataalertComponent } from './missingdataalert.component';

describe('MissingdataalertComponent', () => {
  let component: MissingdataalertComponent;
  let fixture: ComponentFixture<MissingdataalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissingdataalertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingdataalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
