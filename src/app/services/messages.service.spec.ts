import { TestBed, inject } from '@angular/core/testing';

import { MessagesServiceService } from './messages.service';

describe('MessagesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesServiceService]
    });
  });

  it('should ...', inject([MessagesServiceService], (service: MessagesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
