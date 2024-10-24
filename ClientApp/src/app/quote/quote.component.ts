// quote.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
})
export class QuoteComponent {
  selectedCity: string = 'Stockholm'; // Default city
  area: number | null = null; // Area input
  addOns: { [key: string]: boolean } = {
    windowCleaning: false,
    balconyCleaning: false,
    junkRemoval: false,
  };
  quote: number | null = null; // To hold calculated quote

  onCityChange() {
    // Logic for handling city change if needed
  }

  calculateQuote() {
    const pricePerSquareMeter = this.selectedCity === 'Stockholm' ? 65 : 55; //  pricing
    let totalQuote = 0;

    if (this.area) {
      totalQuote = this.area * pricePerSquareMeter; // Calculate based on area
    }

    // Add costs for selected add-ons
    if (this.addOns.windowCleaning) {
      totalQuote += 300; //  cost for window cleaning
    }
    if (this.addOns.balconyCleaning) {
      totalQuote += 150; // cost for balcony cleaning
    }
    if (this.addOns.junkRemoval) {
      totalQuote += 400; // cost for junk removal
    }

    this.quote = totalQuote; // the total quote
  }
}
