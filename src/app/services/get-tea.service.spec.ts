import { TestBed } from '@angular/core/testing';

import { GetTeaService } from './get-tea.service';

describe('GetTeaService', () => {
  let service: GetTeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
