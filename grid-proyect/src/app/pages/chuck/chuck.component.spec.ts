import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckComponent } from './chuck.component';

describe('ChuckComponent', () => {
  let component: ChuckComponent;
  let fixture: ComponentFixture<ChuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChuckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
