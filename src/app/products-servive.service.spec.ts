import { TestBed } from '@angular/core/testing';

import { ProductsServiveService } from './products-servive.service';

describe('ProductsServiveService', () => {
  let service: ProductsServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
