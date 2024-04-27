import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupTemplateComponent } from './mockup-template.component';

describe('MockupTemplateComponent', () => {
  let component: MockupTemplateComponent;
  let fixture: ComponentFixture<MockupTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockupTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockupTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
