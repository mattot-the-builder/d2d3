import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupViewComponent } from './mockup-view.component';

describe('MockupViewComponent', () => {
  let component: MockupViewComponent;
  let fixture: ComponentFixture<MockupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockupViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
