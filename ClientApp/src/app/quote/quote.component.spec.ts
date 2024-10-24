
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteComponent } from './quote.component';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  // Set up the testing environment for QuoteComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteComponent ] // Declare the QuoteComponent
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteComponent); // Create an instance of QuoteComponent
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger change detection
  });

  // Test to ensure the component is created
  it('should create', () => {
    expect(component).toBeTruthy(); // Expect the component to be truthy
  });
});
