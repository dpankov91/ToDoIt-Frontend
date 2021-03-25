import { TestBed } from '@angular/core/testing';

import { AssigneeServiceService } from './assignee-service.service';

describe('AssigneeServiceService', () => {
  let service: AssigneeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssigneeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
