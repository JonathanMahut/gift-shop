import { TestBed } from '@angular/core/testing';

import { UsersServiveService } from './users-servive.service';

describe('UsersServiveService', () => {
  let service: UsersServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
