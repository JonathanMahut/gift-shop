import { TestBed } from '@angular/core/testing';

import { CategoriesServiveService } from './categories-servive.service';

describe('CategoriesServiveService', () => {
  let service: CategoriesServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
